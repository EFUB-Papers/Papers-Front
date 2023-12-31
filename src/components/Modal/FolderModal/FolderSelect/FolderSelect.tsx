import SelectOneFolder from './OneFoler';
import { S } from '../style';
import React, { useState } from 'react';
import { OneFolderType } from '../../../../types/FolderType';
import BasicButton from '../../../_common/BasicButton/BasicButton';
import { usePatchScrapMutation } from '../../../../hooks/apis/scrap';
import { useRecoilState } from 'recoil';
import { folderModalAtom } from '../../../../atom/modal';
import { PatchScrapType } from 'apis/scraps';
import { LocalStorage } from 'utils/localStorage';
import { useSetRecoilState } from 'recoil';
import { useGetFolderListQuery } from 'hooks/apis/folder';

const FolderSelect = () => {
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

  const folderList = useGetFolderListQuery(LocalStorage.getNickname()!);

  const onClickChangeFolder = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (selectId) {
      e.preventDefault();
      if (folderModalState.option === 'select') {
        const formData = new FormData();
        formData.append('thumbnail', new Blob([]));
        formData.append(
          'dto',
          new Blob([JSON.stringify({ folderId: selectId })], {
            type: 'application/json'
          })
        );

        const patchScrapInfo: PatchScrapType = {
          scrapId: folderModalState.scrapId,
          folderId: selectId
        };

        patchNewScrapMutate(patchScrapInfo);
        location.href = `/folder/${LocalStorage.getNickname()}?folderId=${selectId}`;
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
        {folderList?.map((folder, index) => {
          return (
            <SelectOneFolder
              index={index}
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
