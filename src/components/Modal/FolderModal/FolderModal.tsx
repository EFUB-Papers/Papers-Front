import { useRecoilState } from 'recoil';
import { folderEditModal } from '../../../atom/modal';
import BasicModal from '../BasicModal/BasicModal';
import FolderEdit from './FolderEdit/FolderEdit';
import FolderSelect from './FolderSelect/FolderSelect';

const FolderModal = ({ option }: { option: 'edit' | 'select' }) => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(folderEditModal);
  return (
    <BasicModal
      width={450}
      height={500}
      onCloseModal={() => setIsModalOpen(false)}
    >
      {option == 'edit' ? <FolderEdit /> : <FolderSelect />}
    </BasicModal>
  );
};

export default FolderModal;
