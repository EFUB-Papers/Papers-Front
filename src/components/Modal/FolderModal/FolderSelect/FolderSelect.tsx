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
      <S.Title>이동할 폴더 선택</S.Title>
      <S.FlexBox>
        {MyFolderMock.map((folder) => {
          return (
            <SelectOneFolder
              selected={selectId === folder.id}
              title={folder.title}
              onClick={() => {
                onSelectFolder(folder.id);
              }}
            />
          );
        })}
      </S.FlexBox>
    </S.ContentWrapper>
  );
};
export default FolderSelect;
