import CategoryBar from 'components/_common/CategoryBar/CategoryBar';
import { S } from './style';
import ScrapCard from '../../components/_common/ScrapCard/ScrapCard';
import { useParams } from 'react-router';
import { CATEGORY, CategoryKeyType } from 'constants/Category';
import { useCategoryScrapQuery } from '../../hooks/apis/scrap';
import { OneScrapType } from 'types/ScrapType';

const CategoryPage = () => {
  const { categoryId } = useParams();

  const categoryList = useCategoryScrapQuery(categoryId!);

  return (
    <S.Wrapper>
      <S.Category>{CATEGORY[categoryId as CategoryKeyType]}</S.Category>
      <CategoryBar />
      <S.ContentWrapper>
        <>
          {categoryList?.map((scrap: OneScrapType) => {
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
    </S.Wrapper>
  );
};

export default CategoryPage;
