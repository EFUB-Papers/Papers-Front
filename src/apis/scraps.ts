//스크랩 삭제
import { axiosInstance, axiosInstanceWithoutToken } from './axiosInstance';
import { CategoryKeyType, SearchRangeKeyType } from '../constants/Category';

export type OneNewScrapType = {
  scrapTitle: string;
  scrapLink: string;
  scrapContent: string;
  tags: OneTag[];
  folderId: number;
};

type OneTag = {
  content: string;
};

//스크랩 생성
export const postNewScrap = async (newScrapInfo: OneNewScrapType) => {
  const { data } = await axiosInstance.post('/scraps', { ...newScrapInfo });
  return data;
};

export type PatchScrapType = {
  scrapId: number;
  scrapTitle?: string;
  scrapLink?: string;
  scrapContent?: string;
  tags?: OneTag[];
  folderId: number;
};

//스크랩 수정
export const patchScrap = async (scrapInfo: PatchScrapType) => {
  const { scrapId } = scrapInfo;
  const { data } = await axiosInstance.patch(`/scraps/${scrapId}`, {
    ...scrapInfo
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
  const { data } = await axiosInstance.get(`/scraps/${scrapId}`);
  return data;
};

//내 추천 스크랩 보기
export const getRecommendScrapList = async () => {
  const { data } = await axiosInstanceWithoutToken.get(
    `/scraps/recommend?page=1`
  );
  console.log('dagta', data);
  return data;
};

export type SearchScrapType = {
  searchby?: SearchRangeKeyType;
  category?: CategoryKeyType;
  keyword?: string;
  page: number;
};

//스크랩 검색
export const getSearchScrap = async (searchInfo: SearchScrapType) => {
  const { category, searchby, page, keyword } = searchInfo;
  const { data } = await axiosInstance.post(`/scraps/search`, {
    keyword,
    params: {
      searchby,
      category,
      page
    }
  });
  return data;
};

//회원별 스크랩 조회
export const getMyScraps = async (nickname: string) => {
  const { data } = await axiosInstanceWithoutToken(
    `/members/${nickname}/scraps`
  );
  return data;
};
