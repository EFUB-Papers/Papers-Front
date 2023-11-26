import { S } from './style';
import SearchBar from '../../components/_common/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { useSearchScrapQuery } from '../../hooks/apis/scrap';
import { CategoryKeyType, SearchRangeKeyType } from '../../constants/Category';
import BasicContentCard from '../../components/_common/BasicContentCard/BasicContentCard';
import { PostListMock } from '../../mock/postMock';
import { OneScrapType } from '../../types/ScrapType';
import LoadingPage from '../LoadingPage/LoadingPage';

export type SearchScrapType = {
  searchby?: SearchRangeKeyType;
  category?: CategoryKeyType;
  keyword?: string;
  page: number;
};

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const searchby = searchParams.get('range');
  const category = searchParams.get('category');
  const keyword = searchParams.get('keyword') || '';

  const searchInfo: Record<string, string> = {};
  if (searchby && searchby !== 'all') {
    searchInfo.searchby = searchby;
  }

  if (category && category !== 'all') {
    searchInfo.category = category;
  }

  if (keyword) {
    searchInfo.keyword = keyword;
  }
  console.log('searchInfo', searchInfo);

  const { searchList, isLoading } = useSearchScrapQuery({ ...searchInfo });
  console.log('searchList', searchList);

  return (
    <S.Wrapper>
      <S.FlexBox>
        <SearchBar />
      </S.FlexBox>
      {PostListMock.length && !isLoading ? (
        <S.ContentWrapper>
          {PostListMock.map((post: OneScrapType) => {
            const {
              imgUrl,
              scrapId,
              scrapTitle,
              scrapContent,
              scrapLink,
              folderId,
              heartCount,
              commentCount
            } = post;
            return (
              <BasicContentCard
                heartCount={heartCount}
                commentCount={commentCount}
                folderId={folderId}
                scrapId={scrapId}
                originLink={scrapLink}
                originTitle={scrapLink}
                imgUrl={imgUrl}
                scrapTitle={scrapTitle}
                scrapContent={scrapContent}
                isMine={true}
              />
            );
          })}
        </S.ContentWrapper>
      ) : isLoading! && !PostListMock.length ? (
        <div>해당 스크랩이 없습니다.</div>
      ) : (
        <LoadingPage />
      )}
    </S.Wrapper>
  );
};
export default SearchPage;
