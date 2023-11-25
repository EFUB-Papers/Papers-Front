import SelectOneFolder from './OneFoler';
import { S } from '../style';
import { useState } from 'react';
import { OneFolderType } from '../../../../types/FolderType';
import BasicButton from '../../../_common/BasicButton/BasicButton';
import { usePatchScrapMutation } from '../../../../hooks/apis/scrap';
import { useRecoilState, useRecoilValue } from 'recoil';
import { folderModalAtom } from '../../../../atom/modal';

const FolderSelect = ({ folderList }: { folderList: OneFolderType[] }) => {
  const [selectId, setSelectId] = useState<number | null>(null);
  const { patchNewScrapMutate } = usePatchScrapMutation();
  const [folderModalState, setFolderModalState] =
    useRecoilState(folderModalAtom);

  const onClickChangeFolder = () => {
    if (selectId) {
      console.log(selectId);
      if (folderModalState.option === 'select') {
        const formData = new FormData();
        formData.append(
          'dto',
          new Blob([JSON.stringify({ folderId: selectId })], {
            type: 'application/json'
          })
        );
        patchNewScrapMutate({
          scrapId: folderModalState.scrapId,
          scrapInfo: formData
        });
      } else if (folderModalState.option === 'scrapWrite') {
        setFolderModalState((prev) => ({
          ...prev,
          open: false,
          folderId: selectId
        }));
      }
    }
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
