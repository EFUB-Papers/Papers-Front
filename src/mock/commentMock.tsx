import { OneCommentType } from '../types/CommentType';

export const CommentMock: OneCommentType[] = [
  {
    commentId: '1',
    scrapId: '1',
    commentContent: '바다가 너무 예쁘네요^^ 저도 꼭 가보고 싶네요',
    commentWriter: 'writer1'
  },
  {
    commentId: '2',
    scrapId: '1',
    commentContent:
      '바다가 너무 예쁘네요^^ 저도 꼭 가보고 싶네요. 바다가 너무 예쁘네요^^ 저도 꼭 가보고 싶네요',
    commentWriter: 'writer2'
  },
  {
    commentId: '3',
    scrapId: '1',
    commentContent:
      '바다가 너무 예쁘네요^^ 저도 꼭 가보고 싶네요 바다가 너무 예쁘네요^^ 저도 꼭 가보고 싶네요. 바다가 너무 예쁘네요^^ 저도 꼭 가보고 싶네요',
    commentWriter: 'writer3'
  }
];

export const SubCommentMock: OneCommentType[] = [
  {
    commentId: '1',
    scrapId: '1',
    commentContent:
      '그러게요 저도 동해바다 참 좋아하는데 이번 연휴에 가고 싶어요',
    commentWriter: 'writer1'
  },
  {
    commentId: '2',
    scrapId: '1',
    commentContent:
      '그러게요 저도 동해바다 참 좋아하는데 이번 연휴에 가고 싶어요 그러게요 저도 동해바다 참 좋아하는데 이번 연휴에 가고 싶어요',
    commentWriter: 'writer2'
  },
  {
    commentId: '3',
    scrapId: '1',
    commentContent:
      "그러게요 저도 동해바다 참 좋아하는데 이번 연휴에 가고 싶어요 '그러게요 저도 동해바다 참 좋아하는데 이번 연휴에 가고 싶어요 '그러게요 저도 동해바다 참 좋아하는데 이번 연휴에 가고 싶어요'",
    commentWriter: 'writer3'
  }
];
