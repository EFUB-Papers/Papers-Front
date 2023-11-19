import { useRecoilValue } from 'recoil';
import { folderEditModal, folderSelectModal } from '../../atom/modal';
import { Outlet } from 'react-router-dom';
import { useBodyScrollLock } from '../../hooks/useScrollLock';
import { useEffect } from 'react';
import { S } from './style';
import FolderModal from '../../components/Modal/FolderModal/FolderModal';

const FolderModalLayout = () => {
  const isEditModalOpen = useRecoilValue(folderEditModal);
  const isSelectModalOpen = useRecoilValue(folderSelectModal);

  const { lockScroll, openScroll } = useBodyScrollLock();

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
        {isEditModalOpen && <FolderModal option={'edit'} />}
        {isSelectModalOpen && <FolderModal option={'select'} />}
      </S.ModalWrapper>
      <Outlet />
    </S.Wrapper>
  );
};

export default FolderModalLayout;
