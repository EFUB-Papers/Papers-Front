//스크랩 삭제
import { axiosInstance, axiosInstanceWithoutToken } from './axiosInstance';
import { CategoryKeyType, SearchRangeKeyType } from '../constants/Category';

export type OneNewScrapType = {
  writerNickname: string;
  scrapTitle: string;
  scrapLink: string;
  scrapContent: string;
  category: string;
  folderId: number;
  tags: OneTag[];
};

type OneTag = {
  tagName: string;
};

//스크랩 생성
export const postNewScrap = async (newScrapInfo: FormData) => {
  const { data } = await axiosInstance.post('/scraps', newScrapInfo, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return data;
};

export type PatchScrapType = {
  scrapId: number;
  scrapInfo: FormData;
};

//스크랩 수정
export const patchScrap = async (scrapId: number, scrapInfo: FormData) => {
  const { data } = await axiosInstance.patch(`/scraps/${scrapId}`, scrapInfo, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return data;
};

//스크랩 삭제
export const deleteScrap = async (scrapId: number) => {
  const { data } = await axiosInstance.delete(`/scraps/${scrapId}`);
  return data;
};

//스크랩 디테일 조회
export const getScrapDetail = async (scrapId: number) => {
  const { data } = await axiosInstanceWithoutToken.get(`/scraps/${scrapId}`);
  console.log('스크랩 디테일 조회', data);
  return data;
};

//내 추천 스크랩 보기
export const getRecommendScrapList = async () => {
  const { data } = await axiosInstanceWithoutToken.get(
    `/scraps/recommend?page=1`
  );
  return data;
};

export type SearchScrapType = {
  searchby?: SearchRangeKeyType;
  category?: CategoryKeyType;
  keyword?: string;
};

//스크랩 검색
export const getSearchScrap = async (searchInfo: SearchScrapType) => {
  const { searchby, category, keyword } = searchInfo;
  const { data } = await axiosInstanceWithoutToken.post(
    `/scraps/search?searchby=${searchby}&category=${category}`,
    {
      query: keyword
    }
  );
  console.log('스크랩 검색', data);
  return data;
};

export const getLikeScraps = async () => {
  const { data } = await axiosInstance.get(`/scraps/liked`);
  return data;
};

//카테고리별 스크랩 조회
export const getCategoryScrapList = async (category: CategoryKeyType) => {
  const { data } = await axiosInstanceWithoutToken.get(
    `/scraps/category?category=${category}`
  );
  return data;
};
