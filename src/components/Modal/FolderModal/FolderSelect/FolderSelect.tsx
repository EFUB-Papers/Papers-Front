import SelectOneFolder from './OneFoler';
import { S } from '../style';
import { useState } from 'react';
import { OneFolderType } from '../../../../types/FolderType';
import BasicButton from '../../../_common/BasicButton/BasicButton';

const FolderSelect = ({
  folderList,
  scrapId
}: {
  folderList: OneFolderType[];
  scrapId: number;
}) => {
  const [selectId, setSelectId] = useState<number | null>(null);
  // const { patchNewScrapMutate } = usePatchScrapMutation();

  const onClickChangeFolder = () => {
    // if (selectId) {
    //   console.log(selectId);
    //   patchNewScrapMutate({ folderId: selectId, scrapId });
    // }
  };

  const onSelectFolder = (id: number) => {
    setSelectId(id);
  };

  return (
    <S.ContentWrapper>
      <S.FlexBox>
        {folderList.map((folder) => {
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
      <S.SelectButton>
        <BasicButton
          color={'positive'}
          fontSize={14}
          width={70}
          height={30}
          onClick={onClickChangeFolder}
        >
          완료
        </BasicButton>
      </S.SelectButton>
    </S.ContentWrapper>
  );
};
export default FolderSelect;
