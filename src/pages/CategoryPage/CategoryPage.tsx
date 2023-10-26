import CategoryBar from 'components/_common/CategoryBar/CategoryBar';
import ScrapCard from 'components/_common/ScrapCard/ScrapCard';
import { PostListMock } from 'mock/postMock';
import { OnePostType } from 'types/PostType';
import { S } from './style';

const CategoryPage = () => {
  return (
    <S.Wrapper>
      <S.Category>IT</S.Category>
      <CategoryBar />
      <S.ContentWrapper>
        {PostListMock.map((post: OnePostType) => {
          const {
            imgUrl,
            postId,
            postTitle,
            postDetail,
            originPost,
            writerInfo
          } = post;
          return (
            <ScrapCard
              width={'300px'}
              scrapId={postId}
              link={originPost.originLink}
              linkTitle={originPost.originTitle}
              imgUrl={imgUrl}
              author={writerInfo.userName}
              title={postTitle}
              content={postDetail}
              heartCnt={12}
            />
          );
        })}
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default CategoryPage;
