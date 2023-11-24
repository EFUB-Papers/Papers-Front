import { UserType } from './UserType';
import { CategoryKeyType } from 'constants/Category';

export type SimpleOneScrapType = {
  imgUrl: string; //빠짐
  scrapId: number;
  scrapTitle: string;
  scrapContent: string; //빠짐
  scrapLink: string;
  writerNickname: string;
  writerProfile: string | null;
  CreatedAt: Date; //빠짐
  heartCnt: number; //빠짐
  commentCnt: number; //빠짐\
  folderId: number;
};

export type OneScrapType = SimpleOneScrapType & {
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
