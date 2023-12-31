import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
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

//폴더 생성: 폴더를 생성하는 mutation
export const useCreateFolderMutation = (nickname: string) => {
  const queryClient = useQueryClient();
  const { mutate: postNewFolderAction, isSuccess } = useMutation<
    any,
    AxiosError,
    string
  >({
    mutationFn: (folderInfo) => postNewFolder(folderInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['folder', nickname] });
    }
  });

  return { postNewFolderAction, isSuccess };
};

//폴더 삭제 : 폴더를 삭제하는 mutation
export const useDeleteFolderMutation = (nickname: string) => {
  const queryClient = useQueryClient();
  const { mutate: deleteFolderMutate } = useMutation<
    AxiosResponseType,
    AxiosError,
    number
  >({
    mutationFn: (folderInfo) => deleteFolder(folderInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['folder', nickname] });
    }
  });
  return { deleteFolderMutate };
};

//폴더 이름 변경: 폴더 이름을 변경하는 mutation
export const usePutFolderChangeMutation = (nickname: string) => {
  const queryClient = useQueryClient();
  const { mutate: putFolderNameMutate } = useMutation<
    AxiosResponseType,
    AxiosError,
    OneFolderTypeWithoutUser
  >({
    mutationFn: (folderInfo) => putFolderName(folderInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['folder', nickname] });
    }
  });

  return { putFolderNameMutate };
};

//회원별 폴더 조회 : 폴더 리스트를 가져오는 쿼리
export const useGetFolderListQuery = (nickname: string) => {
  const { data } = useQuery<OneFolderType[], AxiosError, OneFolderType[]>({
    queryKey: ['folder', nickname],
    queryFn: () => getFolderList(nickname)
  });
  return data;
};

//폴더별 스크랩 조회 : 폴더별 스크랩을 가져오는 쿼리
export const useFolderScrapsQuery = (folderId: number) => {
  const { data } = useQuery<any, AxiosError>({
    queryKey: ['folderScraps', folderId],
    queryFn: () => getFolderScrapsList(folderId)
  });
  return data;
};
