import { useMutation } from '@tanstack/react-query';
import { deleteScrapLike, postScrapLike } from '../../apis/likes';

//좋아요 추가 mutation
export const usePostScrapLikeMutation = () => {
  const { mutate: postScrapLikeAction } = useMutation({
    mutationFn: (scrapId: number) => postScrapLike(scrapId)
  });
  return { postScrapLikeAction };
};

//좋아요 삭제 mutation
export const useDeleteScrapLikeMutation = () => {
  const { mutate: deleteScrapLikeAction } = useMutation({
    mutationFn: (scrapId: number) => deleteScrapLike(scrapId)
  });
  return { deleteScrapLikeAction };
};
