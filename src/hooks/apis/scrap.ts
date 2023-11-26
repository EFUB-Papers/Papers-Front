import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  deleteScrap,
  getCategoryScrapList,
  getLikeScraps,
  getRecommendScrapList,
  getScrapDetail,
  getSearchScrap,
  patchScrap,
  PatchScrapType,
  postNewScrap,
  SearchScrapType
} from 'apis/scraps';
import { AxiosError } from 'axios';
import { AxiosResponseType } from '../../constants/Api';
import { CategoryKeyType } from 'constants/Category';
import { ScrapDetailType } from 'types/ScrapType';

//스크랩 생성
export const useNewScrapMutation = (folderId: number) => {
  const queryClient = useQueryClient();
  const { mutate: postNewScrapMutate } = useMutation<
    AxiosResponseType,
    AxiosError,
    FormData
  >({
    mutationFn: (scrapInfo: FormData) => postNewScrap(scrapInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['folderScraps', folderId] });
    }
  });
  return { postNewScrapMutate };
};

//스크랩 수정
export const usePatchScrapMutation = ({
  scrapId,
  folderId
}: {
  scrapId: number;
  folderId: number;
}) => {
  const queryClient = useQueryClient();
  const { mutate: patchNewScrapMutate } = useMutation<
    AxiosResponseType,
    AxiosError,
    PatchScrapType
  >({
    mutationFn: (pathScrapInfo: PatchScrapType) =>
      patchScrap(pathScrapInfo.scrapId, pathScrapInfo.scrapInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['scrapDetail', scrapId] });
      queryClient.invalidateQueries({
        queryKey: ['folderScraps', folderId]
      });
    }
  });
  return { patchNewScrapMutate };
};

//스크랩 삭제
export const useDeleteScrapMutation = (folderId: number) => {
  const queryClient = useQueryClient();
  const { mutate: deleteScrapMutate } = useMutation<
    AxiosResponseType,
    AxiosError,
    number
  >({
    mutationFn: (scrapId: number) => deleteScrap(scrapId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['folderScraps', folderId] });
    }
  });
  return { deleteScrapMutate };
};

//스크랩 조회
export const useGetScrapDetailQuery = (scrapId: number) => {
  const { data, isLoading } = useQuery<ScrapDetailType>({
    queryKey: ['scrapDetail', scrapId],
    queryFn: () => getScrapDetail(scrapId)
  });
  return data;
};

//내 추천 스크랩 보기
export const useRecommendScrapQuery = () => {
  const { data: scrapLists, isLoading } = useQuery({
    queryKey: ['recommendScrap'],
    queryFn: () => getRecommendScrapList()
  });
  return { scrapList, isLoading };
};

//스크랩 검색
export const useSearchScrapQuery = (searchInfo: SearchScrapType) => {
  const { data: searchList, isLoading } = useQuery({
    queryKey: ['searchScrap', searchInfo],
    queryFn: () => getSearchScrap(searchInfo)
  });
  return { searchList, isLoading };
};

//좋아요한 스크랩 보기
export const useLikeScrapsQuery = () => {
  const { data } = useQuery({
    queryKey: ['likeScraps'],
    queryFn: () => getLikeScraps()
  });
  return data;
};

//카테고리 별 스크랩 불러오기
export const useCategoryScrapQuery = (category: CategoryKeyType) => {
  const { data: categoryList, isLoading } = useQuery({
    queryKey: ['categoryScraps', category],
    queryFn: () => getCategoryScrapList(category)
  });
  return { categoryList, isLoading };
};
