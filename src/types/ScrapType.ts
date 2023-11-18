import { UserType } from './UserType';
import { CategoryKeyType } from 'constants/Category';

export type OneScrapType = {
  imgUrl: string;
  scrapId: number;
  scrapTitle: string;
  scrapContent: string;
  scrapLink: string;
  writerInfo: UserType; //작성자 정보
  CreatedAt: Date; //작성 날짜
  heartCnt: number; //좋아요 개수
  commentCnt: number; //댓글 개수
  tags: OneTagType[];
  category: CategoryKeyType;
};

export type OriginPostType = {
  originTitle: string; //원본 포스트 제목
  originLink: string; //원본 포스트 링크
  originPostContent: string; //원본 포스트 콘텐츠
  originImgUrl: string; //원본 포스트 이미지
};

//원본링크의 제목과 링크만 있는 타입
export type SimpleOriginPostType = Omit<
  OriginPostType,
  'originPostContent' | 'originImgUrl'
>;

export type OneTagType = {
  tagId: number;
  tagName: string;
};
