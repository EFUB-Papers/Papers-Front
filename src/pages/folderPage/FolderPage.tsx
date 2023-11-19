import LineNavbar from 'components/_common/LineNavbar/LineNavbar';
import { PostListMock } from 'mock/postMock';
import { OneScrapType } from '../../types/ScrapType';
import S from './style';
import { UserMock } from 'mock/userMock';
import BasicContentCard from '../../components/_common/BasicContentCard/BasicContentCard';

type PropsType = {
  isMine: boolean;
};

const FolderPage = ({ isMine }: PropsType) => {
  // const isFolderEditModalOpen = useRecoilValue(folderEditModal);
  // const { lockScroll, openScroll } = useBodyScrollLock();
  //
  // //모달이 꺼지고 켜질 때 뒤 배경 스크롤 중지
  // useEffect(() => {
  //   if (isFolderEditModalOpen) {
  //     lockScroll();
  //   } else {
  //     openScroll();
  //   }
  // }, [isFolderEditModalOpen]);

  return (
    <S.ListWrapper>
      {/*{isFolderEditModalOpen && <FolderModal option={'edit'} />}*/}
      <LineNavbar
        title={isMine ? '내 폴더' : `${UserMock.nickname}님의 폴더`}
      />

      <S.ContentWrapper>
        {PostListMock.map((post: OneScrapType) => {
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
    </S.ListWrapper>
  );
};

export default FolderPage;
