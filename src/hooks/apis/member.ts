import { useMutation } from '@tanstack/react-query';
import {
  ProfileType,
  postMyProfile,
  postOtherUserInfo,
  postSameName
} from 'apis/member';
import { AxiosError } from 'axios';

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
