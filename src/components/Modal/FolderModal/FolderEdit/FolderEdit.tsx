import EditOneFolder from './OneFolder';
import { S } from '../style';
import { OneFolderType } from '../../../../types/FolderType';
import React from 'react';
import BasicButton from '../../../_common/BasicButton/BasicButton';
import { ReactComponent as FolderAddIcon } from 'asset/_common/addIcon.svg';
import { folderModalAtom } from '../../../../atom/modal';
import { useSetRecoilState } from 'recoil';
import { useDeleteFolderMutation } from 'hooks/apis/folder';
import { LocalStorage } from 'utils/localStorage';

const FolderEdit = ({ folderList }: { folderList: OneFolderType[] }) => {
  const setFolderModalState = useSetRecoilState(folderModalAtom);

  const onMoveAddFolder = () => {
    setFolderModalState((prev) => ({
      ...prev,
      option: 'add',
      open: true
    }));
  };
  const { deleteFolderMutate } = useDeleteFolderMutation(
    LocalStorage.getNickname()!
  );

  const onDeleteFolder = (id: number) => {
    deleteFolderMutate(id);
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
        {folderList.map((folder, index) => {
          return (
            <EditOneFolder
              id={folder.folderId}
              title={folder.folderName}
              onDeleteFolder={onDeleteFolder}
              index={index}
            />
          );
        })}
      </S.FlexBox>
    </S.ContentWrapper>
  );
};
export default FolderEdit;
