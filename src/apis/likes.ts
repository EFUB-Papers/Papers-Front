import { axiosInstance } from './axiosInstance';

//좋아요 추가 수정 필요✅
export const postScrapLike = async (scrapId: number) => {
  const data = await axiosInstance.post(`/likes/${scrapId}`);
  return data;
};

//좋아요 삭제 수정 필요✅
export const deleteScrapLike = async (scrapId: number) => {
  const data = axiosInstance.delete(`/likes/${scrapId}`);
  return data;
};
