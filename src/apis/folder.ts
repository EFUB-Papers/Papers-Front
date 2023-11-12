import { axiosInstance } from './axiosInstance';
import { AxiosResponseType } from '../constants/Api';

export type CreateFolderType = {
  folderName: string;
};

//폴더 생성
export const postNewFolder = async (folderInfo: CreateFolderType) => {
  const { folderName } = folderInfo;
  const { data } = await axiosInstance.post<AxiosResponseType>('/folders', {
    folderName
  });
  return data;
};

//회원별 폴더 조회
export const getFolderList = async (nickname: string) => {
  const { data } = await axiosInstance.get(`/${nickname}/folders`);
  return data;
};

export type DeleteFolderType = {
  folderId: number;
};

//폴더 삭제
export const deleteFolder = async (folderInfo: DeleteFolderType) => {
  const { folderId } = folderInfo;
  const { data } = await axiosInstance.delete(`/folders/${folderId}`);
  return data;
};

export type ChangeFolderType = {
  folderId: number;
  folderName: string;
};

//폴더 이름 변경
export const putFolderName = async (folderInfo: ChangeFolderType) => {
  const { folderId, folderName } = folderInfo;
  const { data } = await axiosInstance.put(`/folders/${folderId}`, {
    folderName
  });
  return data;
};
