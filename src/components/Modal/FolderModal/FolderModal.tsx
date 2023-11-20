import { useSetRecoilState } from 'recoil';
import { folderEditModal, folderSelectModal } from '../../../atom/modal';
import BasicModal from '../BasicModal/BasicModal';
import FolderEdit from './FolderEdit/FolderEdit';
import FolderSelect from './FolderSelect/FolderSelect';
import { S } from './style';
import { OneFolderType } from '../../../types/FolderType';

type Edit = {
  option: 'edit';
  folderList: OneFolderType[];
};

type Select = {
  option: 'select';
  scrapId: number;
  folderList: OneFolderType[];
};

type FolderType = Edit | Select;
const FolderModal = (props: FolderType) => {
  const setIsEditModalOpen = useSetRecoilState(folderEditModal);
  const setIsSelectModalOpen = useSetRecoilState(folderSelectModal);
  return props.option == 'edit' ? (
    <BasicModal
      width={450}
      height={500}
      onCloseModal={() => setIsEditModalOpen(false)}
    >
      <>
        <S.Title>폴더 편집</S.Title>
        <FolderEdit folderList={props.folderList} />
      </>
    </BasicModal>
  ) : (
    <BasicModal
      width={450}
      height={500}
      onCloseModal={() => setIsSelectModalOpen(false)}
    >
      <>
        <S.EditIconWrapper>
          <S.Title>이동할 폴더 선택</S.Title>
        </S.EditIconWrapper>
        <FolderSelect folderList={props.folderList} scrapId={props.scrapId} />
      </>
    </BasicModal>
  );
};

export default FolderModal;
