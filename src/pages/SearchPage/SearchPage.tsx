import { S } from './style';
import SearchBar from '../../components/_common/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { useSearchScrapQuery } from '../../hooks/apis/scrap';
import { CategoryKeyType, SearchRangeKeyType } from '../../constants/Category';
import BasicContentCard from '../../components/_common/BasicContentCard/BasicContentCard';
import { OneScrapType } from '../../types/ScrapType';
import LoadingPage from '../LoadingPage/LoadingPage';
import { SearchScrapType } from 'apis/scraps';
import { ReactComponent as Empty } from 'asset/_common/empty.svg';
export type searchType = {
  searchby?: string;
  category?: string;
  keyword?: string;
};

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchby = searchParams.get('searchby') as SearchRangeKeyType;
  const category = searchParams.get('category') as CategoryKeyType;
  const keyword = searchParams.get('keyword') || '';

  const searchInfo: SearchScrapType = {
    searchby: searchby,
    category: category,
    keyword: keyword
  };

  const { searchList, isLoading } = useSearchScrapQuery({ ...searchInfo });

  return (
    <S.Wrapper>
      <S.FlexBox>
        <SearchBar />
      </S.FlexBox>
      {isLoading ? (
        <LoadingPage />
      ) : searchList.length ? (
        <S.ContentWrapper>
          {searchList.map((post: OneScrapType) => {
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
                originalLink={scrapLink}
                imgUrl={imgUrl}
                scrapTitle={scrapTitle}
                scrapContent={scrapContent}
                isMine={true}
              />
            );
          })}
        </S.ContentWrapper>
      ) : (
        <S.FlexBoxColumn>
          <Empty />
          <S.NoContent>해당 스크랩이 없습니다.</S.NoContent>
        </S.FlexBoxColumn>
      )}
    </S.Wrapper>
  );
};
export default SearchPage;
