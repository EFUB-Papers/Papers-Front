export type OneCommentType = {
  commentId: number;
  scrapId: number;
  commentContent: string;
  writerNickname: string;
  writerProfileImgUrl: string | null;
  createdAt: string;
  commentIsMine: boolean;
};

export type OneReplyType = {
  replyId: number;
  commentId: number;
  replyContent: string;
  replyWriterProfileImg: string;
  replyWriterNickname: string;
  createdAt: string;
  replyIsMine: boolean;
};
