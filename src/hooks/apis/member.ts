import { useMutation } from '@tanstack/react-query';
import {
  postMyProfile,
  postNewToken,
  postOtherUserInfo,
  postSameName
} from 'apis/member';
import { AxiosError } from 'axios';

//토큰 재발급 mutation ✅백엔드 수정 필요 (POST가 아니라 GET 메소드여야 할듯.)
export const usePostNewTokenMutation = () => {
  const { data: newTokenData, mutate: postNewTokenAction } = useMutation({
    mutationFn: () => postNewToken()
  });
  return { newTokenData, postNewTokenAction };
};

//닉네임 중복 조회 mutation
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
