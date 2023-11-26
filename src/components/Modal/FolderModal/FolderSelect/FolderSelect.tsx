import SelectOneFolder from './OneFoler';
import { S } from '../style';
import { useEffect, useState } from 'react';
import { OneFolderType } from '../../../../types/FolderType';
import BasicButton from '../../../_common/BasicButton/BasicButton';
import { usePatchScrapMutation } from '../../../../hooks/apis/scrap';
import { useRecoilState } from 'recoil';
import { folderModalAtom } from '../../../../atom/modal';
import React from 'react';

const FolderSelect = ({ folderList }: { folderList: OneFolderType[] }) => {
  const [folderModalState, setFolderModalState] =
    useRecoilState(folderModalAtom);

  const [selectId, setSelectId] = useState<number>(
    folderModalState.option === 'scrapWrite'
      ? folderModalState.folderId
      : folderModalState.defaultFolderId
  );
  const { patchNewScrapMutate } = usePatchScrapMutation({
    scrapId: folderModalState.scrapId,
    folderId: selectId
  });

  const onClickChangeFolder = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (selectId) {
      e.preventDefault();
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

  console.log(selectId);

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
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            onClickChangeFolder(e);
          }}
        >
          완료
        </BasicButton>
      </S.SelectButton>
    </S.ContentWrapper>
  );
};
export default FolderSelect;
