import CategoryBar from "components/_common/CategoryBar/CategoryBar";
import ScrapCard from "components/_common/ScrapCard/ScrapCard";
import { PostListMock } from "mock/postMock";
import { OnePostType } from "types/PostType";
import styled from "styled-components";
import { flexCenter } from "style/common";

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
              width={280}
              scrapId={postId}
              link={originPost.originLink}
              linkTitle={originPost.originTitle}
              imgurl={imgUrl}
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

const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
`;

const Category = styled.div`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.TEXT_SIZE["text-32"]};
  font-weight: 700;
`;
const ContentWrapper = styled.div`
  margin-top: 30px;
  width: 1000px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const S = {
  Wrapper,
  Category,
  ContentWrapper
};
