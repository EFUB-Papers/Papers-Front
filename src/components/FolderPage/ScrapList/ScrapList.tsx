import S from '../../../pages/FolderPage/style';
import { useFolderScrapsQuery } from 'hooks/apis/folder';
import BasicContentCard from '../../_common/BasicContentCard/BasicContentCard';

const ScrapList = ({
  isMine,
  firstFolderId
}: {
  isMine: boolean;
  firstFolderId: number;
}) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const folderId = urlSearchParams.get('folderId');

  const currentFolderId = folderId ? Number(folderId) : Number(firstFolderId);
  const folderScrapList = useFolderScrapsQuery(currentFolderId)!;
  console.log('folderScrapList', folderScrapList);

  return (
    <S.ContentWrapper>
      {folderScrapList?.map((post: any) => {
        const {
          imgUrl,
          scrapTitle,
          scrapLink,
          scrapContent,
          scrapId,
          heartCount,
          commentCount
        } = post;
        return (
          <BasicContentCard
            folderId={currentFolderId}
            scrapId={scrapId}
            imgUrl={imgUrl}
            scrapContent={scrapContent}
            scrapTitle={scrapTitle}
            originTitle={scrapLink}
            originLink={scrapLink}
            isMine={isMine}
            heartCount={heartCount}
            commentCount={commentCount}
          />
        );
      })}
    </S.ContentWrapper>
  );
};

export default ScrapList;
