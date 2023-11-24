import axios, { AxiosError } from 'axios';
import { NETWORK } from 'constants/Api';
import { postNewToken } from 'apis/member';

export const axiosInstanceWithoutToken = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  timeout: NETWORK.TIMEOUT,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
});

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  timeout: NETWORK.TIMEOUT,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
});

//1. 요청 인터셉터
axiosInstance.interceptors.request.use(
  //요청 보내기 전에 수행 로직
  (config) => {
    if (config?.headers == null) {
      throw new Error(`헤더가 정의되지 않았습니다.`);
    }
    if (!localStorage.getItem('papersToken')) {
      window.location.href = '/';
      throw new Error('토큰이 없습니다.');
    }
    config.headers['Authorization'] = `Bearer ${localStorage.getItem(
      'papersToken'
    )}`;
    return config;
  },
  //요청 에러 시 수행 로직
  (error) => {
    return Promise.reject(error);
  }
);

export interface ErrorResponseData {
  statusCode?: number;
  message?: string;
  code?: number;
  sent?: boolean;
}

let isRefreshing = false;

//2.응답 인터셉터
axiosInstance.interceptors.response.use(
  //응답이 성공적으로 왔을 때 로직
  (response: any) => {
    return response.data;
  },
  //응답에서 에러가 났을 때 로직
  async (error: AxiosError) => {
    const originalRequest = error.config!;
    //인증 문제
    if (error?.response?.status == 401 && !isRefreshing) {
      isRefreshing = true;
      const data = await postNewToken();
      console.log(data);
      if (data) {
        console.log('재발급');
        localStorage.removeItem('papersToken');
        localStorage.removeItem('nickname');
        localStorage.setItem('papersToken', data.accessToken);
        localStorage.setItem('nickname', data.nickname);
        originalRequest.headers[
          'Authorization'
        ] = `Bearer ${localStorage.getItem('paparsToken')}`;
        const originalResponse = await axios.request(originalRequest);
        return originalResponse.data;
      } else {
        window.location.href = '/login';
      }
    } else {
      throw error;
    }
  }
);
