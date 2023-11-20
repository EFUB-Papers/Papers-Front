import { useSetRecoilState } from 'recoil';
import { folderEditModal, folderSelectModal } from '../../../atom/modal';
import BasicModal from '../BasicModal/BasicModal';
import FolderEdit from './FolderEdit/FolderEdit';
import FolderSelect from './FolderSelect/FolderSelect';
import BasicButton from '../../_common/BasicButton/BasicButton';
import { S } from './style';
import { OneFolderType } from '../../../types/FolderType';

const FolderModal = ({
  option,
  folderList
}: {
  option: 'edit' | 'select';
  folderList: OneFolderType[];
}) => {
  const setIsEditModalOpen = useSetRecoilState(folderEditModal);
  const setIsSelectModalOpen = useSetRecoilState(folderSelectModal);
  return option == 'edit' ? (
    <BasicModal
      width={450}
      height={500}
      onCloseModal={() => setIsEditModalOpen(false)}
    >
      <>
        <S.Title>폴더 편집</S.Title>
        <FolderEdit folderList={folderList} />
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
          <BasicButton color={'positive'} fontSize={14} width={70} height={30}>
            완료
          </BasicButton>
        </S.EditIconWrapper>
        <FolderSelect folderList={folderList} />
      </>
    </BasicModal>
  );
};

export default FolderModal;
