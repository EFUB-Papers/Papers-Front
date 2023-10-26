import { ReactComponent as FolderIcon } from 'asset/_common/folderIcon.svg';
import { ReactComponent as PencilIcon } from 'asset/_common/greyPencil.svg';
import { ReactComponent as ActivePencilIcon } from 'asset/_common/activePencil.svg';
import { ReactComponent as DeleteIcon } from 'asset/_common/trashIcon.svg';
import { O } from '../style';
import React, { useState } from 'react';
import InputBox from '../../../_common/InputBox/InputBox';

const EditOneFolder = ({ id, title }: { id: number; title: string }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState<string>(title);
  const onChange = (e: any) => {
    setName(e.target.value);
  };

  return (
    <O.Wrapper>
      <O.IconContainer>
        <FolderIcon />
        {isEditMode ? (
          <InputBox
            width={300}
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
              setIsEditMode(false);
            }}
          />
        ) : (
          <PencilIcon
            onClick={() => {
              setIsEditMode(true);
            }}
          />
        )}
        {!isEditMode && <DeleteIcon />}
      </O.IconContainer>
    </O.Wrapper>
  );
};
export default EditOneFolder;
