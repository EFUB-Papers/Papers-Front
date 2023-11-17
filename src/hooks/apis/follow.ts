import { useMutation, useQuery } from '@tanstack/react-query';
import {
  postFollowUser,
  deleteFollowUser,
  getFollowerList,
  getFollowingList
} from 'apis/follow';

//팔로우 걸기
export const usePostFollowMutation = (nickname: string) => {
  const { mutate: postFollowMutate } = useMutation({
    mutationFn: () => postFollowUser(nickname)
  });
  return { postFollowMutate };
};

//팔로우 취소
export const useDeleteFollowMutation = (nickname: string) => {
  const { mutate: deleteFollowMutate } = useMutation({
    mutationFn: () => deleteFollowUser(nickname)
  });
  return { deleteFollowMutate };
};

//팔로잉 조회
export const useGetFollowingQuery = () => {
  const data = useQuery({
    queryKey: ['following'],
    queryFn: getFollowingList
  });
  return data;
};

//팔로워 조회
export const useGetFollowerQuery = () => {
  const data = useQuery({
    queryKey: ['follower'],
    queryFn: getFollowerList
  });
  return data;
};
