import { axiosInstance } from './axiosInstance';

//회원 가입
export const postLogin = async (code: string) => {
  const { data } = await axiosInstance.post('/auth/login', {
    code
  });
  return data;
};

//토큰 재발급 ✅백엔드 수정 필요 (POST가 아니라 GET 메소드여야 할듯.)
export const postNewToken = async () => {
  const { data } = await axiosInstance.post('/auth/reissue');
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
export const postOtherUserInfo = async (nickname: string) => {
  const { data } = await axiosInstance.post('/members/search', {
    nickname
  });
  return data;
};

export type ProfileType = {
  nickname: string;
  introduce: string;
};
//프로필 설정
export const postMyProfile = async (profileInfo: ProfileType) => {
  const { data } = await axiosInstance.post('/members/profile', {
    ...profileInfo
  });
  return data;
};

//회원별 스크랩 조회✅ 수정 필요
