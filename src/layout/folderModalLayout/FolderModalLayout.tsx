import FolderEdit from '../../components/Modal/FolderModal/FolderEdit/FolderEdit';
import FolderSelect from '../../components/Modal/FolderModal/FolderSelect/FolderSelect';
import { useRecoilValue } from 'recoil';
import { folderEditModal, folderSelectModal } from '../../atom/modal';
import { Outlet } from 'react-router-dom';
import { useBodyScrollLock } from '../../hooks/useScrollLock';
import { useEffect } from 'react';
import { S } from './style';

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
      {(isEditModalOpen || isSelectModalOpen) && (
        <S.ModalWrapper>
          {isEditModalOpen && <FolderEdit />}
          {isSelectModalOpen && <FolderSelect />}
        </S.ModalWrapper>
      )}

      <Outlet />
    </S.Wrapper>
  );
};

export default FolderModalLayout;
