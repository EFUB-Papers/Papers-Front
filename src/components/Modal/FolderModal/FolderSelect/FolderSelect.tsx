import { MyFolderMock } from 'mock/userMock';
import SelectOneFolder from './OneFoler';
import { S } from '../style';
import { useState } from 'react';

const FolderSelect = () => {
  const [selectId, setSelectId] = useState<number>(0);
  const onSelectFolder = (id: number) => {
    setSelectId(id);
  };

  return (
    <S.ContentWrapper>
      <S.FlexBox>
        {MyFolderMock.map((folder) => {
          return (
            <SelectOneFolder
              selected={selectId === folder.folderId}
              title={folder.folderName}
              onClick={() => {
                onSelectFolder(folder.folderId);
              }}
            />
          );
        })}
      </S.FlexBox>
    </S.ContentWrapper>
  );
};
export default FolderSelect;
