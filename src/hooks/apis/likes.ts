import { QueryClient, useMutation } from '@tanstack/react-query';
import { deleteScrapLike, postScrapLike } from '../../apis/likes';
import { useQueryClient } from '@tanstack/react-query';
//좋아요 추가 mutation
export const usePostScrapLikeMutation = (scrapId: number) => {
  const queryClient = useQueryClient();
  const { mutate: postScrapLikeAction } = useMutation({
    mutationFn: (scrapId: number) => postScrapLike(scrapId),
    onMutate: async () => {
      // 낙관적 업데이트: 좋아요 증가
      queryClient.setQueryData(['scrapDetail', scrapId], (prevData: any) => ({
        ...prevData,
        heartCount: prevData.heartCount + 1
      }));
    },
    onError: () => {
      // 서버 요청이 실패한 경우 롤백
      queryClient.setQueryData(['scrapDetail', scrapId], (prevData: any) => ({
        ...prevData,
        heartCount: prevData.heartCount - 1
      }));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['scrapDetail', scrapId] });
    }
  });
  return { postScrapLikeAction };
};

//좋아요 삭제 mutation
export const useDeleteScrapLikeMutation = (scrapId: number) => {
  const queryClient = useQueryClient();
  const { mutate: deleteScrapLikeAction } = useMutation({
    mutationFn: (scrapId: number) => deleteScrapLike(scrapId),
    onMutate: async () => {
      // 낙관적 업데이트: 좋아요 증가
      queryClient.setQueryData(['scrapDetail', scrapId], (prevData: any) => ({
        ...prevData,
        heartCount: prevData.heartCount - 1
      }));
    },
    onError: () => {
      // 서버 요청이 실패한 경우 롤백
      queryClient.setQueryData(['scrapDetail', scrapId], (prevData: any) => ({
        ...prevData,
        heartCount: prevData.heartCount + 1
      }));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['scrapDetail', scrapId] });
    }
  });
  return { deleteScrapLikeAction };
};
