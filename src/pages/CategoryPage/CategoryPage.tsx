import CategoryBar from 'components/_common/CategoryBar/CategoryBar';
import { S } from './style';
import { PostListMock } from '../../mock/postMock';
import ScrapCard from '../../components/_common/ScrapCard/ScrapCard';
import { useParams } from 'react-router';
import { CATEGORY, CategoryKeyType } from 'constants/Category';
import InfiniteScroll from '../../hooks/useInfiniteQuery';
import { useSearchScrapQuery } from '../../hooks/apis/scrap';

const CategoryPage = () => {
  const { categoryId } = useParams();

  const searchList = useSearchScrapQuery({ category: categoryId, page: 1 });
  console.log('search', searchList);

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
                  heartCount={10}
                  author={writerNickname}
                />
              </>
            );
          })}
        </>
      </S.ContentWrapper>
      <InfiniteScroll page={1} />
    </S.Wrapper>
  );
};

export default CategoryPage;
