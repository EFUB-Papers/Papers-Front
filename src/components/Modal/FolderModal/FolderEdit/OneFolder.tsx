import { ReactComponent as FolderIcon } from 'asset/_common/folderIcon.svg';
import { ReactComponent as PencilIcon } from 'asset/_common/greyPencil.svg';
import { ReactComponent as ActivePencilIcon } from 'asset/_common/activePencil.svg';
import { ReactComponent as DeleteIcon } from 'asset/_common/trashIcon.svg';
import { O } from '../style';
import { useState } from 'react';
import InputBox from '../../../_common/InputBox/InputBox';
import { usePutFolderChangeMutation } from '../../../../hooks/apis/folder';
import { OneFolderTypeWithoutUser } from '../../../../types/FolderType';
import { LocalStorage } from 'utils/localStorage';
import { useDeleteFolderMutation } from '../../../../hooks/apis/folder';
import ConfirmModal from 'components/_common/Confirm/ConfirmModal';

const EditOneFolder = ({
  id,
  title,
  index
}: {
  id: number;
  title: string;
  index: number;
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState<string>(title);

  const onChange = (e: any) => {
    setName(e.target.value);
  };

  const { putFolderNameMutate } = usePutFolderChangeMutation(
    LocalStorage.getNickname()!
  );

  const onSubmitFolderChange = () => {
    const folderInfo: OneFolderTypeWithoutUser = {
      folderId: id,
      folderName: name
    };
    putFolderNameMutate(folderInfo);
    setIsEditMode(false);
  };

  const { deleteFolderMutate } = useDeleteFolderMutation(
    LocalStorage.getNickname()!
  );

  //폴더 삭제
  const onClickFolderDelete = () => {
    setConfirmModalOpen(true);
  };
  const [confirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);

  return (
    <O.Wrapper>
      {confirmModalOpen && (
        <ConfirmModal
          text={`${title} 폴더 안에 게시물들이 모두 삭제됩니다. 삭제하시겠습니까?`}
          isModalOpen={confirmModalOpen}
          closeModal={() => {
            setConfirmModalOpen(false);
          }}
          onCancel={() => {
            setConfirmModalOpen(false);
          }}
          onConfirm={() => {
            deleteFolderMutate(id);
          }}
        />
      )}
      <O.IconContainer>
        <FolderIcon />
        {isEditMode ? (
          <InputBox
            width={'300px'}
            height={40}
            type={'text'}
            onChange={(e) => {
              onChange(e);
            }}
            name={name}
            value={name}
            readonly={false}
            maxLength={10}
          />
        ) : (
          <div>{!index ? '기본 폴더' : title}</div>
        )}
      </O.IconContainer>
      <O.IconContainer>
        {isEditMode ? (
          <ActivePencilIcon
            onClick={() => {
              onSubmitFolderChange();
            }}
          />
        ) : (
          <PencilIcon
            onClick={() => {
              setIsEditMode(true);
            }}
          />
        )}
        {!isEditMode && index !== 0 && (
          <DeleteIcon onClick={onClickFolderDelete} />
        )}
      </O.IconContainer>
    </O.Wrapper>
  );
};
export default EditOneFolder;
