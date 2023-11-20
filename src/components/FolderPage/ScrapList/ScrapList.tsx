import S from '../../../pages/FolderPage/style';
import { PostListMock } from '../../../mock/postMock';
import { OneScrapType } from '../../../types/ScrapType';
import BasicContentCard from '../../_common/BasicContentCard/BasicContentCard';

const ScrapList = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  //const folderId = urlSearchParams.get('folderId');
  //const scrapList = useFolderScrapsQuery(folderId);
  const scrapList = PostListMock;
  return (
    <S.ContentWrapper>
      {scrapList.map((post: OneScrapType) => {
        const { imgUrl, scrapTitle, scrapLink, scrapContent, scrapId } = post;
        return (
          <BasicContentCard
            scrapId={scrapId}
            imgUrl={imgUrl}
            scrapContent={scrapContent}
            scrapTitle={scrapTitle}
            originTitle={scrapLink}
            originLink={scrapLink}
          />
        );
      })}
    </S.ContentWrapper>
  );
};

export default ScrapList;
