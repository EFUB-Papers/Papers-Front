import { axiosInstance } from './axiosInstance';

//댓글 작성
export type NewCommentType = {
  scrapId: string;
  commentContent: string;
};
export const postNewComment = async (commentInfo: NewCommentType) => {
  try {
    const { data } = await axiosInstance.post('/comments', commentInfo);
    console.log('댓글 작성됨', data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

//댓글 삭제
export const deleteComment = async (commentId: number) => {
  try {
    const { data } = await axiosInstance.delete(`/comments/${commentId}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

//스크랩의 댓글 목록 조회
export const getCommentList = async (scrapId: number) => {
  try {
    const { data } = await axiosInstance.get(`/scraps/${scrapId}/comments`);
    console.log('댓글 목록', data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export type NewReplyType = {
  commentId: number;
  replyContent: string;
};
//대댓글 작성
export const postNewReply = async (replyInfo: NewReplyType) => {
  const { data } = await axiosInstance.post('/replies', replyInfo);
  console.log('대댓글 작성됨', data);
  return data;
};

//대댓글 삭제
export const deleteReply = async (replyId: number) => {
  const { data } = await axiosInstance.delete(`/replies/${replyId}`);
  return data;
};

//댓글의 대댓글 목록 조회
export const getReplyList = async (commentId: number) => {
  const { data } = await axiosInstance.get(`/comments/${commentId}/replies`);
  console.log(`${commentId}번 댓글에 달린 대댓글 목록`, data);
  return data;
};
