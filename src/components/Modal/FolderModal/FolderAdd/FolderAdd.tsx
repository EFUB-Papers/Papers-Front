import React, { useState } from 'react';
import { useCreateFolderMutation } from '../../../../hooks/apis/folder';
import { S } from '../style';
import InputBox from '../../../_common/InputBox/InputBox';
import BasicButton from '../../../_common/BasicButton/BasicButton';
import { useSetRecoilState } from 'recoil';
import { folderModalAtom } from 'atom/modal';
import { LocalStorage } from 'utils/localStorage';

const FolderAdd = () => {
  const [newFolderInput, setNewFolderInput] = useState('');
  const { postNewFolderAction } = useCreateFolderMutation(
    LocalStorage.getNickname()!
  );
  const setFolderModalState = useSetRecoilState(folderModalAtom);

  const onChange = (e: any) => {
    setNewFolderInput(e.target.value);
  };

  const onSubmitCreateNewFolder = (e: any) => {
    e.preventDefault();
    postNewFolderAction(newFolderInput);
    setFolderModalState((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <S.FlexBoxRow>
        <S.AddBox>
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
              onClick={(e) => {
                onSubmitCreateNewFolder(e);
              }}
              disabled={!newFolderInput.length}
            >
              완료
            </BasicButton>
          </S.FlexBoxRow>
        </S.AddBox>
      </S.FlexBoxRow>
    </>
  );
};

export default FolderAdd;
