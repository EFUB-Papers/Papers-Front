import { useMutation, useQuery } from '@tanstack/react-query';
import {
  ProfileType,
  postMyProfile,
  postOtherUserInfo,
  postSameName,
  postLogin,
  postNewToken
} from 'apis/member';
import { AxiosError } from 'axios';

export type LoginResponseType = {
  isExist: boolean;
  email: string;
  nickname: string;
  accessToken: string;
};

//회원 가입 mutation
export const usePostLoginMutation = () => {
  const { data: loginData, mutate: postLoginMutate } = useMutation<
    LoginResponseType,
    AxiosError,
    string
  >({
    mutationFn: (code: string) => postLogin(code),
    onError: (err) => {
      console.log(err);
    }
  });
  return { loginData, postLoginMutate };
};

//토큰 재발급 mutation ✅백엔드 수정 필요 (POST가 아니라 GET 메소드여야 할듯.)
export const usePostNewTokenMutation = () => {
  const { data: newTokenData, mutate: postNewTokenAction } = useMutation({
    mutationFn: () => postNewToken()
  });
  return { newTokenData, postNewTokenAction };
};

//닉네임 중복 조회 mutation
export const useSameNameMutation = (nickname: string) => {
  const { mutate: checkSameNameMutate } = useMutation<boolean, AxiosError>({
    mutationFn: () => postSameName(nickname)
  });
  return { checkSameNameMutate };
};

//회원 정보 조회
export const useUserDetailInfo = (nickname: string) => {
  const { mutate: postGetUserInfoMutate } = useMutation<boolean, AxiosError>({
    mutationFn: () => postOtherUserInfo(nickname)
  });
  return { postGetUserInfoMutate };
};

//프로필 설정
export const usePostProfile = (profileInfo: ProfileType) => {
  const { mutate: postProfileMutate } = useMutation<boolean, AxiosError>({
    mutationFn: () => postMyProfile(profileInfo)
  });
  return { postProfileMutate };
};
