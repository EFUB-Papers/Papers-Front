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
          const { imgUrl, postId, postTitle, postDetail, originPost } = post;
          return (
            <BasicContentCard
              postId={postId}
              originLink={originPost.originLink}
              originTitle={originPost.originTitle}
              imgUrl={imgUrl}
              postTitle={postTitle}
              postDetail={postDetail}
            />
          );
        })}
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
export default SearchPage;
