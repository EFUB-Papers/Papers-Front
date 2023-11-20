import EditOneFolder from './OneFolder';
import { S } from '../style';
import { OneFolderType } from '../../../../types/FolderType';
import React, { useState } from 'react';
import { useCreateFolderMutation } from '../../../../hooks/apis/folder';
import InputBox from '../../../_common/InputBox/InputBox';
import BasicButton from '../../../_common/BasicButton/BasicButton';

const FolderEdit = ({ folderList }: { folderList: OneFolderType[] }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [newFolderInput, setNewFolderInput] = useState('');
  const { postNewFolderAction } = useCreateFolderMutation();

  const onChange = (e: any) => {
    setNewFolderInput(e.target.value);
  };

  const onSubmitCreateNewFolder = () => {
    postNewFolderAction(newFolderInput);
  };

  return (
    <S.ContentWrapper>
      <S.FlexBox>
        {isEditMode ? (
          <S.FlexBoxRow>
            <InputBox
              width={'300px'}
              height={40}
              type={'text'}
              onChange={(e) => {
                onChange(e);
              }}
              name={newFolderInput}
              value={newFolderInput}
              readonly={false}
              maxLength={10}
              placeholder={'새 폴더 이름을 입력해주세요.'}
            />
            <BasicButton
              color={'positive'}
              fontSize={12}
              height={30}
              width={60}
            >
              완료
            </BasicButton>
          </S.FlexBoxRow>
        ) : (
          <S.SelectButton>
            <BasicButton
              color={'positive'}
              fontSize={13}
              height={30}
              width={80}
              onClick={() => {
                setIsEditMode(true);
              }}
            >
              폴더 추가
            </BasicButton>
          </S.SelectButton>
        )}

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
