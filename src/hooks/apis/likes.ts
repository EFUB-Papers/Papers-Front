import { QueryClient, useMutation } from '@tanstack/react-query';
import { deleteScrapLike, postScrapLike } from '../../apis/likes';

//좋아요 추가 mutation
export const usePostScrapLikeMutation = () => {
  const queryClient = new QueryClient();
  const { mutate: postScrapLikeAction } = useMutation({
    mutationFn: (scrapId: number) => postScrapLike(scrapId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['likeScraps'] });
    }
    // onMutate: (variables, scrapId) => {
    //   // 낙관적 업데이트를 수행하기 전에 현재 데이터를 저장
    //   const snapshot = queryClient.getQueryData(['scrapDetail', scrapId]);

    //   // 낙관적 업데이트를 위해 새로운 댓글을 UI에 즉시 반영
    //   queryClient.setQueryData(['scrapDetail', scrapId], (oldData) => ({
    //     ...oldData,
    //     comments: [
    //       ...oldData.comments,
    //       { id: Date.now(), content: variables.content }
    //     ]
    //   }));

    //   return snapshot; // 나중에 사용하기 위해 이전 데이터를 반환
    // }
  });
  return { postScrapLikeAction };
};

//좋아요 삭제 mutation
export const useDeleteScrapLikeMutation = () => {
  const queryClient = new QueryClient();
  const { mutate: deleteScrapLikeAction } = useMutation({
    mutationFn: (scrapId: number) => deleteScrapLike(scrapId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['likeScraps'] });
    }
  });
  return { deleteScrapLikeAction };
};
