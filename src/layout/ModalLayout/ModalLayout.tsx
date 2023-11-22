import { useRecoilValue } from 'recoil';
import { Outlet, useParams } from 'react-router-dom';
import { useBodyScrollLock } from '../../hooks/useScrollLock';
import { useEffect } from 'react';
import { S } from './style';
import { folderModalAtom } from '../../atom/modal';
import { folderMock } from '../../mock/userMock';
import FolderModal from '../../components/Modal/FolderModal/FolderModal';

const ModalLayout = () => {
  const folderModal = useRecoilValue(folderModalAtom);

  const { lockScroll, openScroll } = useBodyScrollLock();
  const params = useParams();
  //const nickname = params.nickname;
  //const folderList = useGetFolderListQuery(nickname!);
  const folderList = folderMock;
  //모달이 꺼지고 켜질 때 뒤 배경 스크롤 중지
  useEffect(() => {
    if (folderModal.open) {
      lockScroll();
    } else {
      openScroll();
    }
  }, [folderModal.open]);

  return (
    <S.Wrapper isScrollAble={!folderModal.open}>
      <S.ModalWrapper>
        {folderModal.open && <FolderModal folderList={folderList} />}
      </S.ModalWrapper>
      <Outlet />
    </S.Wrapper>
  );
};

export default ModalLayout;
