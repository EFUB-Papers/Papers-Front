import { S } from './style';
import { PostListMock } from '../../mock/postMock';
import { OneScrapType } from '../../types/ScrapType';
import SearchBar from '../../components/_common/SearchBar/SearchBar';
import BasicContentCard from '../../components/_common/BasicContentCard/BasicContentCard';
import { useSearchParams } from 'react-router-dom';
import { useSearchScrapQuery } from '../../hooks/apis/scrap';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const range = searchParams.get('range');
  const category = searchParams.get('category');
  const keyword = searchParams.get('keyword') || '';

  const searchInfo: Record<string, string> = {};
  if (range && range !== 'all') {
    searchInfo.range = range;
  }

  if (category && range !== 'all') {
    searchInfo.category = category;
  }

  if (keyword) {
    searchInfo.keyword = keyword;
  }

  const searchList = useSearchScrapQuery({ ...searchInfo, page: 1 });
  console.log(searchList);

  return (
    <S.Wrapper>
      <SearchBar />
      <S.ContentWrapper>
        {PostListMock.map((post: OneScrapType) => {
          const {
            imgUrl,
            scrapId,
            scrapTitle,
            scrapContent,
            scrapLink,
            folderId
          } = post;
          return (
            <BasicContentCard
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
    </S.Wrapper>
  );
};
export default SearchPage;
