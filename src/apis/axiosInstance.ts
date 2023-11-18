import axios from 'axios';
import { getCookie } from 'utils/cookieStorage';
import { NETWORK } from '../constants/Api';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
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
      throw new Error(`config.header is undefined`);
    }
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    config.headers['Authorization'] = `Bearer ${getCookie('papersToken')}`;
    return config;
  },
  //요청 에러 시 수행 로직
  (error) => {
    return Promise.reject(error);
  }
);

//2.응답 인터셉터
axiosInstance.interceptors.response.use(
  //응답이 성공적으로 왔을 때 로직
  (response) => {
    const res = response.data;
    return res;
  },
  //응답에서 에러가 났을 때 로직
  async function (error) {
    //인증 문제
    if (error?.status === 401) {
      try {
        // const {
        //   //리프레시 토큰 발급
        //   data: { refreshToken }
        // } = await axios.post('/api/v1/user/renew', authToken.refresh);
        //refresh 유효한 경우 새롭게 accesstoken 설정

        if (error?.config.headers === undefined) {
          error.config.headers = {};
        } else {
          // error.config.headers['Authorization'] = refreshToken;
          // //sessionStorage에 새 토큰 저장
          // sessionStorage.setItem('accessToken', refreshToken);
          // 중단된 요청 새로운 토큰으로 재전송
          const originalResponse = await axios.request(error.config);
          return originalResponse.data.data;
        }
      } catch (err) {
        console.log('로그인/ 메인 페이지로로 다이렉트');
      }
    } else {
      throw error;
    }
  }
);
