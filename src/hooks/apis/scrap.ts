import { useMutation, useQuery } from '@tanstack/react-query';
import {
  deleteScrap,
  getRecommendScrapList,
  getScrapDetail,
  getSearchScrap,
  patchScrap,
  PatchScrapType,
  postNewScrap,
  SearchScrapType
} from 'apis/scraps';
import { AxiosError } from 'axios';
import { OneScrapType } from '../../types/ScrapType';
import { AxiosResponseType } from '../../constants/Api';
import { useQueryClient } from '@tanstack/react-query';

//스크랩 생성
export const useNewScrapMutation = () => {
  // const queryClient = useQueryClient();
  const { mutate: postNewScrapMutate } = useMutation<
    AxiosResponseType,
    AxiosError,
    FormData
  >({
    mutationFn: (scrapInfo: FormData) => postNewScrap(scrapInfo)
    // onSuccess: queryClient.invalidateQueries('scrap')
  });
  return { postNewScrapMutate };
};

//스크랩 수정
export const usePatchScrapMutation = () => {
  const { mutate: patchNewScrapMutate } = useMutation<
    AxiosResponseType,
    AxiosError,
    PatchScrapType
  >({
    mutationFn: (scrapInfo: PatchScrapType) => patchScrap(scrapInfo)
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
  const { data } = useQuery({
    queryKey: ['scrapDetail', scrapId],
    queryFn: () => getScrapDetail(scrapId)
  });
  return data;
};

//내 추천 스크랩 보기
export const useRecommendScrapQuery = () => {
  const { data } = useQuery({
    queryKey: ['recommendScrap'],
    queryFn: () => getRecommendScrapList()
  });
  return data;
};

//스크랩 검색
export const useSearchScrapQuery = (searchInfo: SearchScrapType) => {
  const { data } = useQuery<OneScrapType[], AxiosError, SearchScrapType>({
    queryKey: ['searchScrap'],
    queryFn: () => getSearchScrap(searchInfo)
  });
  return data;
};
