import BasicContentCard from 'components/_common/BasicContentCard/BasicContentCard';
import { useLikeScrapsQuery } from '../../hooks/apis/scrap';
import { OneScrapType } from 'types/ScrapType';
import { S } from './style';

const LikePage = () => {
  const likeList = useLikeScrapsQuery()!;

  return (
    // Render the wrapper component
    <S.Wrapper>
      {/* Map through the liked scraps and render BasicContentCard for each */}
      {likeList?.data?.map((scrap: OneScrapType) => {
        const {
          imgUrl,
          scrapContent,
          scrapId,
          scrapTitle,
          scrapLink,
          folderId,
          heartCount,
          commentCount
        } = scrap;

        return (
          // Render BasicContentCard for each liked scrap
          <BasicContentCard
            scrapTitle={scrapTitle}
            originLink={scrapLink}
            originTitle={scrapLink}
            imgUrl={imgUrl}
            scrapContent={scrapContent}
            scrapId={scrapId}
            folderId={folderId}
            heartCount={heartCount}
            commentCount={commentCount}
            isMine={false}
          />
        );
      })}
    </S.Wrapper>
  );
};

export default LikePage;
