import { useSetRecoilState } from 'recoil';
import { folderEditModal, folderSelectModal } from '../../../atom/modal';
import BasicModal from '../BasicModal/BasicModal';
import FolderEdit from './FolderEdit/FolderEdit';
import FolderSelect from './FolderSelect/FolderSelect';

const FolderModal = ({ option }: { option: 'edit' | 'select' }) => {
  const setIsEditModalOpen = useSetRecoilState(folderEditModal);
  const setIsSelectModalOpen = useSetRecoilState(folderSelectModal);
  return option == 'edit' ? (
    <BasicModal
      width={450}
      height={500}
      onCloseModal={() => setIsEditModalOpen(false)}
    >
      <FolderEdit />
    </BasicModal>
  ) : (
    <BasicModal
      width={450}
      height={500}
      onCloseModal={() => setIsSelectModalOpen(false)}
    >
      <FolderSelect />
    </BasicModal>
  );
};

export default FolderModal;
