import { useRecoilValue } from 'recoil';
import { folderEditModal, folderSelectModal } from '../../atom/modal';
import { Outlet, useParams } from 'react-router-dom';
import { useBodyScrollLock } from '../../hooks/useScrollLock';
import { useEffect } from 'react';
import { S } from './style';
import FolderModal from '../../components/Modal/FolderModal/FolderModal';
import { folderMock } from '../../mock/userMock';

const FolderModalLayout = () => {
  const isEditModalOpen = useRecoilValue(folderEditModal);
  const isSelectModalOpen = useRecoilValue(folderSelectModal);

  const { lockScroll, openScroll } = useBodyScrollLock();
  const params = useParams();
  //const nickname = params.nickname;
  //const folderList = useGetFolderListQuery(nickname!);
  const folderList = folderMock;
  //모달이 꺼지고 켜질 때 뒤 배경 스크롤 중지
  useEffect(() => {
    if (isEditModalOpen) {
      lockScroll();
    } else {
      openScroll();
    }
  }, [isEditModalOpen]);

  return (
    <S.Wrapper isScrollAble={!isEditModalOpen && !isSelectModalOpen}>
      <S.ModalWrapper>
        {isEditModalOpen && (
          <FolderModal option={'edit'} folderList={folderList} />
        )}
        {isSelectModalOpen && (
          <FolderModal option={'select'} folderList={folderList} />
        )}
      </S.ModalWrapper>
      <Outlet />
    </S.Wrapper>
  );
};

export default FolderModalLayout;
