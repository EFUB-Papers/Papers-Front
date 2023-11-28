import { axiosInstance, axiosInstanceWithoutToken } from './axiosInstance';
import { UserInfoType } from '../hooks/apis/member';
//회원 가입✅
export const postLogin = async (code: string) => {
  try {
    const { data } = await axiosInstanceWithoutToken.post('/auth/login', {
      code
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

type NewTokenResponseType = {
  accessToken: string;
  email: string;
  nickname: string;
};

//토큰 재발급
export const postNewToken = async () => {
  const data: NewTokenResponseType = await axiosInstance.get('/auth/reissue');
  return data.accessToken;
};

//닉네임 중복 조회✅
export const postSameName = async (nickname: string) => {
  try {
    const { data } = await axiosInstance.post<boolean>(
      '/members/nickname/isExist',
      {
        nickname
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

//회원 정보 조회
export const getOtherUserInfo = async (nickname: string) => {
  try {
    const { data } = await axiosInstanceWithoutToken.get<UserInfoType>(
      `/members/search/${nickname}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
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
  const { data } = await axiosInstance.post('/members/profile', profileInfo, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  console.log('프로필 설정', data);
  return data;
};

//랜덤 회원 리스트 조회
export const getRecommendUsers = async () => {
  const { data } = await axiosInstanceWithoutToken('/members/random-list');
  return data;
};
