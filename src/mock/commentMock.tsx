import { OneCommentType, OneReplyType } from '../types/CommentType';

export const CommentMock: OneCommentType[] = [
  {
    commentId: 1,
    scrapId: 1,
    commentContent:
      '그러게요 저도 동해바다 참 좋아하는데 이번 연휴에 가고 싶어요',
    writerNickname: '강아지',
    writerProfileImgUrl: '',
    createdAt: null,
    commentIsMine: true
  },
  {
    commentId: 1,
    scrapId: 1,
    commentContent:
      '그러게요 저도 동해바다 참 좋아하는데 이번 연휴에 가고 싶어요',
    writerNickname: '강아지',
    writerProfileImgUrl: '',
    createdAt: null,
    commentIsMine: true
  },
  {
    commentId: 1,
    scrapId: 1,
    commentContent:
      '그러게요 저도 동해바다 참 좋아하는데 이번 연휴에 가고 싶어요',
    writerNickname: '강아지',
    writerProfileImgUrl: '',
    createdAt: null,
    commentIsMine: true
  }
];

export const ReplyMock: OneReplyType[] = [
  {
    commentId: 1,
    replyId: 1,
    replyContent:
      '그러게요 저도 동해바다 참 좋아하는데 이번 연휴에 가고 싶어요',
    replyWriterNickname: '강아지',
    replyWriterProfileImg: '',
    createdAt: null,
    commentIsMine: true
  },
  {
    commentId: 2,
    replyId: 2,
    replyContent:
      '그러게요 저도 동해바다 참 좋아하는데 이번 연휴에 가고 싶어요',
    replyWriterNickname: '강아지',
    replyWriterProfileImg: '',
    createdAt: null,
    commentIsMine: true
  },
  {
    commentId: 3,
    replyId: 3,
    replyContent:
      '그러게요 저도 동해바다 참 좋아하는데 이번 연휴에 가고 싶어요',
    replyWriterNickname: '강아지',
    replyWriterProfileImg: '',
    createdAt: null,
    commentIsMine: true
  }
];
