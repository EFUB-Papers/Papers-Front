import { useMutation } from '@tanstack/react-query';
import { NewCommentType, deleteComment, postNewComment } from 'apis/comment';
import { AxiosError } from 'axios';
import { AxiosResponseType } from 'constants/Api';

//댓글 작성 mutation
export const usePostNewCommentMutation = (commentInfo: NewCommentType) => {
  const { mutate: postCommentAction } = useMutation<
    AxiosResponseType,
    AxiosError
  >({
    mutationFn: () => postNewComment(commentInfo)
  });
  return { postCommentAction };
};

//댓글 삭제
export const useDeleteCommentMutation = (commentId: number) => {
  const { mutate: deleteCommentAction } = useMutation<
    AxiosResponseType,
    AxiosError
  >({
    mutationFn: () => deleteComment(commentId)
  });
  return { deleteCommentAction };
};
