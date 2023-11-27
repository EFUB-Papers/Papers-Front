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

const EditOneFolder = ({
  id,
  title,
  onDeleteFolder,
  index
}: {
  id: number;
  title: string;
  onDeleteFolder: (id: number) => void;
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
        {!isEditMode && (
          <DeleteIcon
            onClick={() => {
              onDeleteFolder(id);
            }}
          />
        )}
      </O.IconContainer>
    </O.Wrapper>
  );
};
export default EditOneFolder;
