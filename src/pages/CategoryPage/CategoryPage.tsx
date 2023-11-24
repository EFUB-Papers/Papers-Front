import CategoryBar from 'components/_common/CategoryBar/CategoryBar';
import { S } from './style';
import { PostListMock } from '../../mock/postMock';
import ScrapCard from '../../components/_common/ScrapCard/ScrapCard';
import { useParams } from 'react-router';
import { CATEGORY, CategoryKeyType } from 'constants/Category';

const CategoryPage = () => {
  const { categoryId } = useParams();

  return (
    <S.Wrapper>
      <S.Category>{CATEGORY[categoryId as CategoryKeyType]}</S.Category>
      <CategoryBar />
      <S.ContentWrapper>
        <>
          {PostListMock.map((scrap) => {
            const {
              scrapId,
              scrapTitle,
              scrapContent,
              scrapLink,
              imgUrl,
              writerNickname
            } = scrap;
            return (
              <>
                <ScrapCard
                  width={300}
                  scrapId={scrapId}
                  link={scrapLink}
                  linkTitle={scrapLink}
                  imgUrl={imgUrl}
                  title={scrapTitle}
                  content={scrapContent}
                  heartCnt={10}
                  author={writerNickname}
                />
              </>
            );
          })}
        </>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default CategoryPage;
