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
  //요청 보내기 전에 수행
  (config) => {
    if (config?.headers == null) {
      throw new Error(`헤더가 정의되지 않았습니다.`);
    }
    if (!localStorage.getItem('papersToken')) {
      window.location.href = '/';
      throw new Error('토큰이 없습니다.');
    }
    config.headers['Authorization'] = `${localStorage.getItem('papersToken')}`;
    return config;
  },
  //요청 에러 시 수행 로직
  (error) => {
    return Promise.reject(error);
  }
);

const isRefreshing = false;
let retry = false;
//2.응답 인터셉터
axiosInstance.interceptors.response.use(
  //응답이 성공적으로 왔을 때 로직
  (response: any) => {
    return response;
  },
  //응답에서 에러가 났을 때 로직
  async (error: AxiosError) => {
    //인증 문제
    if (error?.response?.status == 401 && !isRefreshing) {
      const originalRequest = error.config;

      if (!error.response || !originalRequest)
        throw new Error('에러가 발생했습니다.');

      if (!retry) {
        retry = true;
        const newAccessToken = await postNewToken();
        console.log('new', newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        localStorage.setItem('papersToken', newAccessToken);
        return axiosInstance(originalRequest);
      }
    }
  }
);
