import BasicContentCard from 'components/_common/BasicContentCard/BasicContentCard';
import { useLikeScrapsQuery } from '../../hooks/apis/scrap';
import { OneScrapType } from 'types/ScrapType';
import { S } from './style';

const LikePage = () => {
  const likeList = useLikeScrapsQuery()!;

  return (
    <S.Wrapper>
      <S.Title>좋아요한 스크랩</S.Title>
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
          <BasicContentCard
            scrapTitle={scrapTitle}
            originalLink={scrapLink}
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
