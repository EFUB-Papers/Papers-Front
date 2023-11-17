import CategoryBar from 'components/_common/CategoryBar/CategoryBar';
import ScrapCard from 'components/_common/ScrapCard/ScrapCard';
import { PostListMock } from 'mock/postMock';
import { OneScrapType } from '../../types/ScrapType';
import { S } from './style';

const CategoryPage = () => {
  return (
    <S.Wrapper>
      <S.Category>IT</S.Category>
      <CategoryBar />
      <S.ContentWrapper>
        {PostListMock.map((scrap: OneScrapType) => {
          const {
            imgUrl,
            postId,
            postTitle,
            postDetail,
            originPost,
            writerInfo
          } = scrap;
          return (
            <ScrapCard
              width={300}
              scrapId={postId}
              link={originPost.originLink}
              linkTitle={originPost.originTitle}
              imgUrl={imgUrl}
              author={writerInfo.nickname}
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
