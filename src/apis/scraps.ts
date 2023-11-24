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
  const { data } = await axiosInstance.post(
    '/scraps',
    { ...newScrapInfo },
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );
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
export const getSearchScrap = async (
  searchInfo: SearchScrapType
): Promise<any> => {
  try {
    const { searchby, category, page, keyword } = searchInfo;
    const queryParams = [];
    if (searchby) {
      queryParams.push(`searchby=${searchby}`);
    }
    if (category) {
      queryParams.push(`category=${category}`);
    }
    queryParams.push(`page=${page}`);
    const queryString = queryParams.join('&');
    const data = await axiosInstance.post(
      `/scraps/search${queryString ? `?${queryString}` : ''}`,
      {
        query: keyword
      }
    );
    console.log('data', data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
