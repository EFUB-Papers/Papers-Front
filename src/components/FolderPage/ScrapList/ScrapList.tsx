import S from '../../../pages/FolderPage/style';
import { PostListMock } from '../../../mock/postMock';
import { OneScrapType } from '../../../types/ScrapType';
import BasicContentCard from '../../_common/BasicContentCard/BasicContentCard';
import { useFolderScrapsQuery } from 'hooks/apis/folder';

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
      {folderScrapList?.map((post: OneScrapType) => {
        const { imgUrl, scrapTitle, scrapLink, scrapContent, scrapId } = post;
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
          />
        );
      })}
    </S.ContentWrapper>
  );
};

export default ScrapList;
