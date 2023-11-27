import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import {
  deleteFollowUser,
  getCurrentFollowing,
  getFollowerList,
  getFollowingList,
  postFollowUser
} from 'apis/follow';
import { AxiosResponseType } from '../../constants/Api';
import { AxiosError } from 'axios';
import { useQueryClient } from '@tanstack/react-query';
//팔로우 걸기
export const usePostFollowMutation = ({
  nickname,
  setIsFollow
}: {
  nickname: string;
  setIsFollow: any;
}) => {
  const queryClient = useQueryClient();
  const { mutate: postFollowMutate } = useMutation<
    AxiosResponseType,
    AxiosError,
    string
  >({
    mutationFn: (nickname: string) => postFollowUser(nickname),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentFollow', nickname] });
    },
    onMutate: () => {
      setIsFollow(true);
    }
  });
  return { postFollowMutate };
};

//팔로우 취소
export const useDeleteFollowMutation = ({
  nickname,
  setIsFollow
}: {
  nickname: string;
  setIsFollow: any;
}) => {
  const queryClient = useQueryClient();
  const { mutate: deleteFollowMutate } = useMutation<
    AxiosResponseType,
    AxiosError,
    string
  >({
    mutationFn: (nickname: string) => deleteFollowUser(nickname),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentFollow', nickname] });
    },
    onMutate: () => {
      setIsFollow(false);
    }
  });
  return { deleteFollowMutate };
};

//팔로잉 조회
export const useGetFollowingQuery = () => {
  const { data } = useQuery({
    queryKey: ['following'],
    queryFn: () => getFollowingList()
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
