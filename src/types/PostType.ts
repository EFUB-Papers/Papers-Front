import { UserType } from './UserType';

export type OnePostType = {
  imgUrl: string;
  postId: number;
  postTitle: string;
  postDetail: string;
  originPost: SimpleOriginPostType; //원본 포스트 정보
  writerInfo: UserType; //작성자 정보
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
