import { useMutation } from '@tanstack/react-query';
import {
  ProfileType,
  postMyProfile,
  postOtherUserInfo,
  postSameName,
  postLogin
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
