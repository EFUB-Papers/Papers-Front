//스크랩 삭제
import { axiosInstance } from './axiosInstance';
import { CategoryKeyType, SearchRangeKeyType } from '../constants/Category';

export type OneScrapType = {
  scrapTitle: string;
  scrapLink: string;
  scrapContent: string;
  tags: OneTag[];
};

type OneTag = {
  content: string;
};

//스크랩 생성
export const postNewScrap = async (newScrapInfo: OneScrapType) => {
  const { data } = await axiosInstance.post('/scraps', { ...newScrapInfo });
  return data;
};

type PatchScrapType = OneScrapType & { scrapId: number };
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

//스크랩 조회
export const getScrapDetail = async (scrapId: number) => {
  const { data } = await axiosInstance.get(`/scraps/${scrapId}`);
  return data;
};

//내 추천 스크랩 보기
export const getRecommentScrapList = async () => {
  const { data } = await axiosInstance.get(`/scraps/recommend`);
  return data;
};

type SearchScrapType = {
  searchby: SearchRangeKeyType;
  category: CategoryKeyType;
  page: number;
};
//스크랩 검색
export const searchScrap = async (searchInfo: SearchScrapType) => {
  const { data } = await axiosInstance.get(`/scraps/search`, {
    params: {
      ...searchInfo
    }
  });
  return data;
};
