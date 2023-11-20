import BasicModal from '../BasicModal/BasicModal';
import FolderEdit from './FolderEdit/FolderEdit';
import FolderSelect from './FolderSelect/FolderSelect';
import { S } from './style';
import { OneFolderType } from '../../../types/FolderType';
import FolderAdd from './FolderAdd/FolderAdd';
import { folderModalAtom } from '../../../atom/modal';
import { useRecoilState } from 'recoil';

const FolderModal = ({ folderList }: { folderList: OneFolderType[] }) => {
  const [folderModalState, setFolderModalState] =
    useRecoilState(folderModalAtom);

  const onModalClose = () => {
    setFolderModalState((prev) => ({ ...prev, open: false }));
  };

  return folderModalState.option == 'edit' ? (
    <BasicModal width={450} height={500} onCloseModal={onModalClose}>
      <>
        <S.Title>폴더 편집</S.Title>
        <FolderEdit folderList={folderList} />
      </>
    </BasicModal>
  ) : folderModalState.option === 'select' ? (
    <BasicModal width={450} height={500} onCloseModal={onModalClose}>
      <>
        <S.EditIconWrapper>
          <S.Title>이동할 폴더 선택</S.Title>
        </S.EditIconWrapper>
        <FolderSelect folderList={folderList} />
      </>
    </BasicModal>
  ) : (
    <BasicModal width={450} height={200} onCloseModal={onModalClose}>
      <S.FlexBox>
        <S.Title>폴더 추가</S.Title>
        <FolderAdd />
      </S.FlexBox>
    </BasicModal>
  );
};

export default FolderModal;
