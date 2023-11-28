import { OneScrapType } from '../types/ScrapType';

export const OnePostMock: OneScrapType = {
  category: '여행',
  scrapId: 1,
  scrapContent:
    '아침이 자랑처럼 마리아 까닭입니다. 별빛이 잠, 보고, 시인의 봅니다. 같이 이름을 이름자를 하나에 시인의 했던 이런 내 새워 있습니다. 다 차 시인의 봅니다. 비둘기, 나는 벌써 까닭이요, 당신은 이름과 청춘이 봅니다. 이 이런 벌레는 아침이 써 나의 나의 계절이 않은 까닭입니다.',
  scrapTitle: '풍요의 제주 ‘일멍쉬멍’ 워케이션 성지로',
  scrapLink: 'https://despiteallthat.tistory.com/243',
  imgUrl:
    'https://ak-d.tripcdn.com/images/1mj1c12000bnc2cdm5451_C_800_600_R5.jpg_.webp?proc=autoorient',
  writerNickname: '나는 고양이다',
  writerProfile: '',
  CreatedAt: new Date(),
  tags: [
    {
      tagId: 1,
      tagName: '여행'
    },
    {
      tagId: 2,
      tagName: '제주도'
    },
    {
      tagId: 3,
      tagName: '워케이션'
    },
    {
      tagId: 4,
      tagName: '송악산'
    },
    {
      tagId: 5,
      tagName: '장기휴가'
    }
  ],
  heartCount: 10,
  commentCount: 10,
  folderId: 1
};

export const PostListMock: OneScrapType[] = [
  OnePostMock,
  OnePostMock,
  OnePostMock,
  OnePostMock,
  OnePostMock,
  OnePostMock,
  OnePostMock,
  OnePostMock
];
