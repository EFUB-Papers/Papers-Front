import { useMutation, useQuery } from '@tanstack/react-query';
import {
  OneNewScrapType,
  patchScrap,
  postNewScrap,
  PatchScrapType,
  deleteScrap,
  getScrapDetail,
  getRecommentScrapList,
  SearchScrapType,
  getSearchScrap
} from 'apis/scraps';

//스크랩 생성
export const useNewScrapMutation = (scrapInfo: OneNewScrapType) => {
  const { mutate: postNewScrapMutate } = useMutation({
    mutationFn: () => postNewScrap(scrapInfo)
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
export const useSearchScrap = (searchInfo: SearchScrapType) => {
  const { data } = useQuery({
    queryKey: ['recommendScrap'],
    queryFn: () => getSearchScrap(searchInfo)
  });
  return data;
};
