import { useMutation } from '@tanstack/react-query';
import { postMyProfile, postOtherUserInfo, postSameName } from 'apis/member';
import { AxiosError } from 'axios';

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
export const useUserDetailInfo = (nickname: string) => {
  const { mutate: postGetUserInfoMutate } = useMutation<boolean, AxiosError>({
    mutationFn: () => postOtherUserInfo(nickname)
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
