import { axiosInstance } from './axiosInstance';

//회원 가입
export const postLogin = async (code: string) => {
  const { data } = await axiosInstance.post('/auth/login', {
    code
  });
  return data;
};

//토큰 재발급✅수정 필요
export const postNewToken = async () => {
  return await axiosInstance.post('/auth/reissue');
};

//닉네임 중복 조회
export const postSameName = async (nickname: string) => {
  console.log('이름중복', nickname);
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

//회원별 스크랩 조회✅ 수정 필요
