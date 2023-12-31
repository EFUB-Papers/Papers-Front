import CategoryBar from 'components/_common/CategoryBar/CategoryBar';
import { S } from './style';
import ScrapCard from '../../components/_common/ScrapCard/ScrapCard';
import { useParams } from 'react-router';
import { CATEGORY, CategoryKeyType } from 'constants/Category';
import { useCategoryScrapQuery } from '../../hooks/apis/scrap';
import { OneScrapType } from 'types/ScrapType';
import LoadingPage from '../LoadingPage/LoadingPage';

const CategoryPage = () => {
  const { categoryId } = useParams();

  const { categoryList, isLoading } = useCategoryScrapQuery(categoryId!);

  return (
    <S.Wrapper>
      <S.Box>
        <S.Category>{CATEGORY[categoryId as CategoryKeyType]}</S.Category>
        <CategoryBar />
        {isLoading ? (
          <LoadingPage />
        ) : (
          <S.ContentWrapper>
            <>
              {categoryList?.map((scrap: OneScrapType) => {
                const {
                  scrapId,
                  scrapTitle,
                  scrapContent,
                  scrapLink,
                  imgUrl,
                  heartCount,
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
                      heartCount={heartCount}
                      author={writerNickname}
                    />
                  </>
                );
              })}
            </>
          </S.ContentWrapper>
        )}
      </S.Box>
    </S.Wrapper>
  );
};

export default CategoryPage;
