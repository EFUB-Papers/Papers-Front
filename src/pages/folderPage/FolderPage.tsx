import LineNavbar from 'components/_common/LineNavbar/LineNavbar';
import BasicContentCard from 'components/_common/BasicContentCard/BasicContentCard';
import { PostListMock } from 'mock/postMock';
import { OnePostType } from 'types/PostType';
import S from './style';
import { UserMock } from 'mock/userMock';
import FolderModal from '../../components/Modal/FolderModal/FolderModal';
import { useRecoilValue } from 'recoil';
import { folderEditModal } from '../../atom/modal';
import { useEffect } from 'react';
import { useBodyScrollLock } from '../../hooks/useScrollLock';

type PropsType = {
  isMine: boolean;
};

const FolderPage = ({ isMine }: PropsType) => {
  const isFolderEditModalOpen = useRecoilValue(folderEditModal);
  const { lockScroll, openScroll } = useBodyScrollLock();

  //모달이 꺼지고 켜질 때 뒤 배경 스크롤 중지
  useEffect(() => {
    if (isFolderEditModalOpen) {
      lockScroll();
    } else {
      openScroll();
    }
  }, [isFolderEditModalOpen]);

  return (
    <S.ListWrapper isScrollAble={!isFolderEditModalOpen}>
      {isFolderEditModalOpen && <FolderModal option={'edit'} />}
      <LineNavbar
        title={isMine ? '내 폴더' : `${UserMock.userName}님의 폴더`}
      />

      <S.ContentWrapper>
        {PostListMock.map((post: OnePostType) => {
          const { imgUrl, postTitle, originPost, postDetail } = post;
          const { originLink, originTitle } = originPost;
          return (
            <BasicContentCard
              imgUrl={imgUrl}
              postDetail={postDetail}
              postTitle={postTitle}
              originTitle={originTitle}
              originLink={originLink}
            />
          );
        })}
      </S.ContentWrapper>
    </S.ListWrapper>
  );
};

export default FolderPage;
