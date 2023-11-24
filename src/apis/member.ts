import axios from 'axios';
import { axiosInstance, axiosInstanceWithoutToken } from './axiosInstance';
import { UserInfoType } from '../hooks/apis/member';

//회원 가입
export const postLogin = async (code: string) => {
  const { data } = await axios.post(
    'http://3.37.102.113:8080/auth/login',
    {
      code
    },
    {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      withCredentials: true
    }
  );
  console.log(data);
  return data;
};

type NewTokenResponseType = {
  accessToken: string;
  email: string;
  nickname: string;
};

export const postNewToken = async () => {
  const data: NewTokenResponseType = await axiosInstance.get('/auth/reissue');
  return data;
};

//닉네임 중복 조회
export const postSameName = async (nickname: string) => {
  const { data } = await axiosInstance.post<boolean>(
    '/members/nickname/isExist',
    {
      nickname
    }
  );
  return data;
};

//회원 정보 조회
export const getOtherUserInfo = async (nickname: string) => {
  const { data } = await axios.get<UserInfoType>(
    `http://3.37.102.113:8080/members/search/${nickname}`,
    {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    }
  );
  return data;
};

export type ProfileType = {
  dto: {
    nickname: string;
    introduce: string;
  };
  profileImg: File;
};

//프로필 설정
export const postMyProfile = async (profileInfo: FormData) => {
  console.log(profileInfo);
  const { data } = await axiosInstance.post('/members/profile', profileInfo, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return data;
};

//랜덤 회원 리스트 조회
export const getRecommendUsers = async () => {
  const { data } = await axiosInstanceWithoutToken('/members/random-list');
  return data;
};
