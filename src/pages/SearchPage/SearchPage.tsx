import { S } from './style';
import { PostListMock } from '../../mock/postMock';
import { OneScrapType } from '../../types/ScrapType';
import SearchBar from '../../components/_common/SearchBar/SearchBar';
import BasicContentCard from '../../components/_common/BasicContentCard/BasicContentCard';

const SearchPage = () => {
  return (
    <S.Wrapper>
      <SearchBar />
      <S.ContentWrapper>
        {PostListMock.map((post: OneScrapType) => {
          const { imgUrl, scrapId, scrapTitle, scrapContent, scrapLink } = post;
          return (
            <BasicContentCard
              scrapId={scrapId}
              originLink={scrapLink}
              originTitle={scrapLink}
              imgUrl={imgUrl}
              scrapTitle={scrapTitle}
              scrapContent={scrapContent}
            />
          );
        })}
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
export default SearchPage;
