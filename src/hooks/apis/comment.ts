import { useMutation } from '@tanstack/react-query';
import { deleteComment, NewCommentType, postNewComment } from 'apis/comment';
import { AxiosError } from 'axios';
import { AxiosResponseType } from 'constants/Api';

//댓글 작성 mutation
export const usePostNewCommentMutation = () => {
  const { mutate: postCommentAction } = useMutation<
    AxiosResponseType,
    AxiosError,
    NewCommentType
  >({
    mutationFn: (commentInfo: NewCommentType) => postNewComment(commentInfo)
  });
  return { postCommentAction };
};

//댓글 삭제
export const useDeleteCommentMutation = () => {
  const { mutate: deleteCommentAction } = useMutation<
    AxiosResponseType,
    AxiosError,
    number
  >({
    mutationFn: (commentId: number) => deleteComment(commentId)
  });
  return { deleteCommentAction };
};
