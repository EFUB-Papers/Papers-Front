import BasicModal from '../BasicModal/BasicModal';
import OneFolder from './components/OneFolder/OneFolder';
import { S } from './style';
import { MyFolderMock } from 'mock/userMock';
import { useBodyScrollLock } from 'hooks/useScrollLock';
import { useEffect } from 'react';
import { ReactComponent as DeleteIcon } from 'asset/_common/deleteIcon.svg';

const FolderEditModal = ({ isModalOpen }: { isModalOpen: boolean }) => {
  const { lockScroll, openScroll } = useBodyScrollLock();

  useEffect(() => {
    if (isModalOpen) {
      lockScroll();
    } else {
      openScroll();
    }
  }, [isModalOpen]);

  return (
    <BasicModal width={450} height={500}>
      <S.ContentWrapper>
        <DeleteIcon />
        <S.Title>이동할 폴더 선택</S.Title>
        <S.FlexBox>
          {MyFolderMock.map((folder) => {
            return <OneFolder id={folder.id} title={folder.title} />;
          })}
        </S.FlexBox>
      </S.ContentWrapper>
    </BasicModal>
  );
};
export default FolderEditModal;
