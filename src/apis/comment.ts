import { axiosInstance } from './axiosInstance';

//댓글 작성
export type NewCommentType = {
  scrapId: string;
  commentContent: string;
};
export const postNewComment = async (commentInfo: NewCommentType) => {
  const { data } = await axiosInstance.post('/comments', {
    ...commentInfo
  });
  return data;
};

//댓글 삭제
export const deleteComment = async (commentId: number) => {
  const { data } = await axiosInstance.delete(`/comments/${commentId}`);
  return data;
};

//스크랩의 댓글 목록 조회
export const getCommentList = async (scrapId: number) => {
  const data = await axiosInstance.get(`/scraps/${scrapId}/comments`);
  return data;
};

export type NewReplyType = {
  commentId: string;
  replyContent: string;
};
//대댓글 작성
export const postNewReply = async (replyInfo: NewReplyType) => {
  const data = await axiosInstance.post('/replys', {
    ...replyInfo
  });
  return data;
};

//대댓글 삭제
export const deleteReply = async (replyId: number) => {
  const data = await axiosInstance.delete(`/replyies/${replyId}`);
  return data;
};

//댓글의 대댓글 목록 조회
export const getReplyList = async (commentId: number) => {
  const data = await axiosInstance.get(`/comments/${commentId}/replies`);
  return data;
};
