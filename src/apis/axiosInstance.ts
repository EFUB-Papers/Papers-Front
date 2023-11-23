import axios, { AxiosError } from 'axios';
import { getCookie, setCookie } from 'utils/cookieStorage';
import { NETWORK } from 'constants/Api';
import { postNewToken } from 'apis/member';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
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
    if (!config.headers['authorization']) {
      if (localStorage.getItem('papersToken')) {
        config.headers['Authorization'] = `Bearer ${localStorage.getItem(
          'papersToken'
        )}`;
      }
    }
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
    if (error?.response?.status === 401 && !isRefreshing) {
      isRefreshing = true;
      const newToken = await postNewToken();
      setCookie('papersToken', newToken);
      originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
      const originalResponse = await axios.request(originalRequest);
      return originalResponse.data;
    } else {
      throw error;
    }
  }
);
