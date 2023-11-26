import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getOtherUserInfo,
  getRecommendUsers,
  postMyProfile,
  postNewToken,
  postSameName
} from 'apis/member';

import { AxiosError } from 'axios';

//토큰 재발급 mutation
export const usePostNewTokenMutation = () => {
  const { data: newTokenData, mutate: postNewTokenAction } = useMutation({
    mutationFn: () => postNewToken()
  });
  return { newTokenData, postNewTokenAction };
};

//닉네임 중복 조회 mutation
export const useSameNameMutation = () => {
  const { mutate: postSameNameAction, data } = useMutation<
    any,
    AxiosError,
    string
  >({
    mutationFn: (nickname: string) => postSameName(nickname)
  });
  return { postSameNameAction, data };
};

export type UserInfoType = {
  defaultFolderId: number;
  email: string;
  introduce: string | null;
  nickname: string | null;
  profileImgUrl: string | null;
};

//회원 정보 조회
export const useUserInfoQuery = (nickname: string) => {
  const { data: userInfo } = useQuery({
    queryKey: ['userInfo', nickname],
    queryFn: () => getOtherUserInfo(nickname),
    enabled: !!nickname,
    staleTime: 0
  });
  return userInfo;
};

//프로필 설정
export const usePostProfile = (nickname: string) => {
  const { mutate: postProfileMutate } = useMutation<
    boolean,
    AxiosError,
    FormData
  >({
    mutationFn: (profileInfo: FormData) => postMyProfile(profileInfo)
  });

  return { postProfileMutate };
};

export const useRecommendUsersQuery = () => {
  const { data } = useQuery({
    queryKey: ['userList'],
    queryFn: () => getRecommendUsers()
  });
  return data;
};
