import { useMutation, useQuery } from '@tanstack/react-query';
import {
  deleteFollowUser,
  getCurrentFollowing,
  getFollowerList,
  getFollowingList,
  postFollowUser
} from 'apis/follow';
import { AxiosResponseType } from '../../constants/Api';
import { AxiosError } from 'axios';

//팔로우 걸기
export const usePostFollowMutation = () => {
  const { mutate: postFollowMutate } = useMutation<
    AxiosResponseType,
    AxiosError,
    string
  >({
    mutationFn: (nickname: string) => postFollowUser(nickname)
  });
  return { postFollowMutate };
};

//팔로우 취소
export const useDeleteFollowMutation = () => {
  const { mutate: deleteFollowMutate } = useMutation<
    AxiosResponseType,
    AxiosError,
    string
  >({
    mutationFn: (nickname: string) => deleteFollowUser(nickname)
  });
  return { deleteFollowMutate };
};

//팔로잉 조회
export const useGetFollowingQuery = () => {
  const { data } = useQuery({
    queryKey: ['following'],
    queryFn: getFollowingList
  });
  return data;
};

//팔로워 조회
export const useGetFollowerQuery = () => {
  const { data } = useQuery({
    queryKey: ['follower'],
    queryFn: getFollowerList
  });
  return data;
};

export const useGetCurrentFollowQuery = (nickname: string) => {
  const { data } = useQuery({
    queryKey: ['currentFollow', nickname],
    queryFn: () => getCurrentFollowing(nickname)
  });
  return data;
};
