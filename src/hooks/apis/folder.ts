import { useMutation, useQuery } from '@tanstack/react-query';
import {
  deleteFolder,
  getFolderList,
  getFolderScrapsList,
  postNewFolder,
  putFolderName
} from '../../apis/folder';
import { AxiosError } from 'axios';
import { AxiosResponseType } from '../../constants/Api';
import {
  OneFolderType,
  OneFolderTypeWithoutUser
} from '../../types/FolderType';
import { OneScrapType } from '../../types/ScrapType';

interface FolderType {
  folderId: number;
  folderName: string;
  folderOwnerNickname: string; //나이거나 다른 유저일 수 있음
}

//폴더 생성: 폴더를 생성하는 mutation
export const useCreateFolderMutation = () => {
  const { mutate: postNewFolderAction } = useMutation<
    AxiosResponseType,
    AxiosError,
    string
  >({
    mutationFn: (folderInfo) => postNewFolder(folderInfo)
  });

  return { postNewFolderAction };
};

//폴더 삭제 : 폴더를 삭제하는 mutation
export const useDeleteFolderMutation = () => {
  const { mutate: deleteFolderMutate } = useMutation<
    AxiosResponseType,
    AxiosError,
    number
  >({
    mutationFn: (folderInfo) => deleteFolder(folderInfo)
  });
  return { deleteFolderMutate };
};

//폴더 이름 변경: 폴더 이름을 변경하는 mutation
export const usePutFolderChangeMutation = () => {
  const { mutate: putFolderNameMutate } = useMutation<
    AxiosResponseType,
    AxiosError,
    OneFolderTypeWithoutUser
  >({
    mutationFn: (folderInfo) => putFolderName(folderInfo)
  });

  return { putFolderNameMutate };
};

//회원별 폴더 조회 : 폴더 리스트를 가져오는 쿼리
export const useGetFolderListQuery = (nickname: string) => {
  const { data } = useQuery<OneFolderType[], AxiosError, FolderType[]>({
    queryKey: ['folder', nickname],
    queryFn: () => getFolderList(nickname),
    enabled: !nickname
  });
  return data;
};

//폴더별 스크랩 조회 : 폴더별 스크랩을 가져오는 쿼리
export const useFolderScrapsQuery = (folderId: number) => {
  const { data } = useQuery<OneScrapType[], AxiosError>({
    queryKey: ['folderScraps', folderId],
    queryFn: () => getFolderScrapsList(folderId)
  });
  return data;
};
