//스크랩 삭제
import { axiosInstance } from './axiosInstance';

export type DeleteScrapType = {
  scrapId: number;
};
export const deleteScrap = async (info: DeleteScrapType) => {
  const { scrapId } = info;
  const { data } = await axiosInstance.delete(`/scraps/${scrapId}`);
  return data;
};
