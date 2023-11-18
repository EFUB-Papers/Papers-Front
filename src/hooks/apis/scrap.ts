import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  deleteScrap,
  getRecommentScrapList,
  getScrapDetail,
  getSearchScrap,
  OneNewScrapType,
  patchScrap,
  PatchScrapType,
  postNewScrap,
  SearchScrapType
} from 'apis/scraps';
import { AxiosError } from 'axios';
import { OneScrapType } from '../../types/ScrapType';

//스크랩 생성
export const useNewScrapMutation = (scrapInfo: OneNewScrapType) => {
  const queryClient = useQueryClient();
  const { mutate: postNewScrapMutate } = useMutation({
    mutationFn: () => postNewScrap(scrapInfo)
    // onSuccess: queryClient.invalidateQueries('scrap')
  });
  return { postNewScrapMutate };
};

//스크랩 수정
export const usePatchScrapMutation = (scrapInfo: PatchScrapType) => {
  const { mutate: patchNewScrapMutate } = useMutation({
    mutationFn: () => patchScrap(scrapInfo)
  });
  return { patchNewScrapMutate };
};

//스크랩 삭제
export const useDeleteScrapMutation = (scrapId: number) => {
  const { mutate: deleteScrapMutate } = useMutation({
    mutationFn: () => deleteScrap(scrapId)
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
    queryFn: () => getRecommentScrapList()
  });
  return data;
};

//스크랩 검색
export const useSearchScrap = () => {
  const { data } = useQuery<OneScrapType[], AxiosError, SearchScrapType>({
    queryKey: ['recommendScrap'],
    queryFn: (queryKey, searchInfo, context) => getSearchScrap(searchInfo)
  });
  return data;
};
