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
