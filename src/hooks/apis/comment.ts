import { useMutation, useQuery } from '@tanstack/react-query';
import {
  NewCommentType,
  deleteComment,
  postNewComment,
  getCommentList,
  NewReplyType,
  postNewReply,
  deleteReply,
  getReplyList
} from 'apis/comment';
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

//스크랩의 댓글 목록 조회 query
export const useGetCommentListQuery = (scrapId: number) => {
  const { data } = useQuery({
    queryKey: ['commentList', scrapId],
    queryFn: () => getCommentList(scrapId)
  });
  return data;
};

//대댓글 작성 mutation
export const usePostNewReplyMutation = () => {
  const { mutate: postNewReplyAction } = useMutation({
    mutationFn: (replyInfo: NewReplyType) => postNewReply(replyInfo)
  });
  return { postNewReplyAction };
};

//대댓글 삭제 mutation
export const useDeleteReplyMutation = () => {
  const { mutate: deleteReplyAction } = useMutation({
    mutationFn: (replyId: number) => deleteReply(replyId)
  });
  return { deleteReplyAction };
};

//댓글의 대댓글 목록 조회 query
export const useGetReplyListQuery = (commentId: number) => {
  const { data } = useQuery({
    queryKey: ['replyList', commentId],
    queryFn: () => getReplyList(commentId)
  });
  return data;
};
