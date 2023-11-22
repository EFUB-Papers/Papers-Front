import EditOneFolder from './OneFolder';
import { S } from '../style';
import { OneFolderType } from '../../../../types/FolderType';
import React from 'react';
import BasicButton from '../../../_common/BasicButton/BasicButton';
import { ReactComponent as FolderAddIcon } from 'asset/_common/addIcon.svg';
import { folderModalAtom } from '../../../../atom/modal';
import { useSetRecoilState } from 'recoil';

const FolderEdit = ({ folderList }: { folderList: OneFolderType[] }) => {
  const setFolderModalState = useSetRecoilState(folderModalAtom);

  const onMoveAddFolder = () => {
    setFolderModalState({
      option: 'add',
      open: true,
      scrapId: 0
    });
  };
  return (
    <S.ContentWrapper>
      <S.FlexBox>
        <S.SelectButton>
          <BasicButton
            color={'positive'}
            fontSize={15}
            height={30}
            width={100}
            onClick={onMoveAddFolder}
          >
            <S.FlexBoxRow>
              <>폴더 추가</>
              <FolderAddIcon />
            </S.FlexBoxRow>
          </BasicButton>
        </S.SelectButton>
        {folderList.map((folder) => {
          return (
            <EditOneFolder id={folder.folderId} title={folder.folderName} />
          );
        })}
      </S.FlexBox>
    </S.ContentWrapper>
  );
};
export default FolderEdit;
