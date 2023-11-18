import { useMutation } from '@tanstack/react-query';
import {
  postLogin,
  postMyProfile,
  postOtherUserInfo,
  postSameName
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

//폴더 이름 변경: 폴더 이름을 변경하는 mutation
export const useSameNameMutation = () => {
  const { mutate: postSameNameAction, data } = useMutation<
    boolean,
    AxiosError,
    string
  >({
    mutationFn: (nickname: string) => postSameName(nickname)
  });
  return { postSameNameAction, data };
};

//회원 정보 조회
export const useUserDetailInfoMutation = () => {
  const { mutate: postGetUserInfoMutate } = useMutation<
    boolean,
    AxiosError,
    string
  >({
    mutationFn: (nickname: string) => postOtherUserInfo(nickname)
  });
  return { postGetUserInfoMutate };
};

//프로필 설정
export const usePostProfile = () => {
  const { mutate: postProfileMutate } = useMutation<
    boolean,
    AxiosError,
    FormData
  >({
    mutationFn: (profileInfo: FormData) => postMyProfile(profileInfo)
  });
  return { postProfileMutate };
};
