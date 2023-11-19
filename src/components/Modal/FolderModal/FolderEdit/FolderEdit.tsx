import { MyFolderMock } from 'mock/userMock';
import EditOneFolder from './OneFolder';
import { S } from '../style';
import { ReactComponent as DeleteIcon } from 'asset/_common/deleteIcon.svg';
import { useRecoilState } from 'recoil';
import { folderEditModal } from '../../../../atom/modal';

const FolderEdit = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useRecoilState(folderEditModal);

  return (
    <S.ContentWrapper>
      <S.Title>폴더 편집</S.Title>
      <S.DeleteIconWrapper>
        <DeleteIcon onClick={() => setIsEditModalOpen(false)} />
      </S.DeleteIconWrapper>
      <S.FlexBox>
        {MyFolderMock.map((folder) => {
          return (
            <EditOneFolder id={folder.folderId} title={folder.folderName} />
          );
        })}
      </S.FlexBox>
    </S.ContentWrapper>
  );
};
export default FolderEdit;
