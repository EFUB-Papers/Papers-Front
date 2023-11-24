import { ReactComponent as FolderIcon } from 'asset/_common/folderIcon.svg';
import { ReactComponent as PencilIcon } from 'asset/_common/greyPencil.svg';
import { ReactComponent as ActivePencilIcon } from 'asset/_common/activePencil.svg';
import { ReactComponent as DeleteIcon } from 'asset/_common/trashIcon.svg';
import { O } from '../style';
import React, { useState } from 'react';
import InputBox from '../../../_common/InputBox/InputBox';
import {
  useDeleteFolderMutation,
  usePutFolderChangeMutation
} from '../../../../hooks/apis/folder';
import { OneFolderTypeWithoutUser } from '../../../../types/FolderType';

const EditOneFolder = ({ id, title }: { id: number; title: string }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState<string>(title);
  const { putFolderNameMutate } = usePutFolderChangeMutation();
  const { deleteFolderMutate } = useDeleteFolderMutation();

  const onChange = (e: any) => {
    setName(e.target.value);
  };

  const onSubmitFolderChange = () => {
    const folderInfo: OneFolderTypeWithoutUser = {
      folderId: id,
      folderName: name
    };
    putFolderNameMutate(folderInfo);
    setIsEditMode(false);
  };

  const onDeleteFolder = () => {
    console.log('id', id);
    console.log('폴더 삭제');
    deleteFolderMutate(id);
  };

  return (
    <O.Wrapper>
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
          <div>{title}</div>
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
        {!isEditMode && <DeleteIcon onClick={onDeleteFolder} />}
      </O.IconContainer>
    </O.Wrapper>
  );
};
export default EditOneFolder;
