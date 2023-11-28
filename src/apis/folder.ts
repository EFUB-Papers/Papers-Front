import { axiosInstance, axiosInstanceWithoutToken } from './axiosInstance';
import { AxiosResponseType } from 'constants/Api';
import { OneFolderType, OneFolderTypeWithoutUser } from 'types/FolderType';

//폴더 생성
export const postNewFolder = async (folderName: string) => {
  const data = await axiosInstance.post<AxiosResponseType>('/folders', {
    folderName
  });
  return data;
};
//폴더 삭제
export const deleteFolder = async (folderId: number) => {
  const { data } = await axiosInstance.delete(`/folders/${folderId}`);
  return data;
};

//폴더 이름 변경
export const putFolderName = async (folderInfo: OneFolderTypeWithoutUser) => {
  const { folderId, folderName } = folderInfo;
  const { data } = await axiosInstance.put(`/folders/${folderId}`, {
    folderName
  });
  return data;
};

//회원별 폴더 조회
export const getFolderList = async (nickname: string) => {
  const { data } = await axiosInstanceWithoutToken.get<OneFolderType[]>(
    `/members/${nickname}/folders`
  );
  console.log('folder', data);
  return data;
};

//폴더별 스크랩 조회
export const getFolderScrapsList = async (folderId: number) => {
  const { data } = await axiosInstanceWithoutToken.get<any>(
    `/folders/${folderId}/scraps?page=1`
  );
  return data;
};
