export type OneCommentType = {
  commentId: number;
  scrapId: number;
  commentContent: string;
  writerNickname: '강아지';
  writerImg: '';
  createdAt: null;
  commentIsMine: boolean;
};

export type OneReplyType = {
  replyId: number;
  commentId: number;
  replyContent: string;
  replyWriterImg: string;
  replyWriterNickname: string;
  createdAt: null;
  commentIsMine: boolean;
};
