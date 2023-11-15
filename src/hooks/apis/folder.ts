import { useMutation, useQuery } from '@tanstack/react-query';
import {
  ChangeFolderType,
  CreateFolderType,
  deleteFolder,
  DeleteFolderType,
  getFolderList,
  postNewFolder,
  putFolderName
} from '../../apis/folder';
import { AxiosError } from 'axios';
import { AxiosResponseType } from '../../constants/Api';
import { OneFolderType } from '../../types/FolderType';

interface FolderType {
  folderId: number;
  folderName: string;
  folderOwnerNickname: string; //나이거나 다른 유저일 수 있음
}

//폴더 리스트를 가져오는 쿼리
export const useGetFolderListQuery = (nickname: string) => {
  const { data } = useQuery<OneFolderType[], AxiosError, FolderType[]>({
    queryKey: ['folder', nickname],
    queryFn: () => getFolderList(nickname)
  });
  return data;
};

//폴더별 스크랩을 가져오는 쿼리
export const useFolderScrapsQuery = () => {};

//폴더를 생성하는 mutation
export const useCreateNewFolderMutation = () => {
  const { mutate: postNewFolderAction } = useMutation<
    AxiosResponseType,
    AxiosError,
    CreateFolderType
  >({
    mutationFn: (folderInfo) => postNewFolder(folderInfo)
  });

  return { postNewFolderAction };
};

//폴더를 삭제하는 mutation
export const useDeleteFolderMutation = () => {
  const { mutate: deleteFolderAction } = useMutation<
    AxiosResponseType,
    AxiosError,
    DeleteFolderType
  >({
    mutationFn: (folderInfo) => deleteFolder(folderInfo)
  });
  return { deleteFolderAction };
};

//폴더 이름을 변경하는 mutation
export const usePutFolderChangeMutation = () => {
  const { mutate: putFolderNameAction } = useMutation<
    AxiosResponseType,
    AxiosError,
    ChangeFolderType
  >({
    mutationFn: (folderInfo) => putFolderName(folderInfo)
  });

  return { putFolderNameAction };
};
