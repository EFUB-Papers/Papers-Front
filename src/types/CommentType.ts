export type OneCommentType = {
  commentId: number;
  scrapId: number;
  commentContent: string;
  writerNickname: '강아지';
  writerProfileImgUrl: '';
  createdAt: null;
  commentIsMine: boolean;
};

export type OneReplyType = {
  replyId: number;
  commentId: number;
  replyContent: string;
  replyWriterProfileImg: string;
  replyWriterNickname: string;
  createdAt: null;
  commentIsMine: boolean;
};
