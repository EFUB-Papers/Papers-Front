import BasicModal from '../BasicModal/BasicModal';
import { useSetRecoilState } from 'recoil';
import React, { useRef, useState } from 'react';
import {
  usePostProfile,
  useSameNameMutation
} from '../../../hooks/apis/member';
import { S } from '../../FolderPage/ProfileBox/style';
import CircleIcon from '../../_common/CircleBox/CircleBox';
import InputBox from '../../_common/InputBox/InputBox';
import BasicButton from '../../_common/BasicButton/BasicButton';
import TextArea from '../../_common/TextArea/TextArea';
import useInputs from '../../../hooks/useInputs';
import { ProfileProps } from '../../FolderPage/ProfileBox/ProfileBox';
import { userModalAtom } from '../../../atom/modal';

const UserModal = ({ imgUrl, userName, userDetail }: ProfileProps) => {
  const setUserModalOpen = useSetRecoilState(userModalAtom);

  const { values, onChange } = useInputs({
    name: userName,
    detail: userDetail
  });

  const { name, detail } = values;

  const [profileImg, setProfileImg] = useState<string>(imgUrl);
  const [errorMessage, setErrorMessage] = useState<string>('');

  //이름 중복 검사
  const { postSameNameAction, data: hasSameName } = useSameNameMutation();
  //프로필 정보 변경
  const { postProfileMutate } = usePostProfile();

  const inputRef = useRef<HTMLInputElement>(null);
  //닉네임 중복 검사
  const onSubmitNickname = () => {
    postSameNameAction(name);
    if (hasSameName) {
      setErrorMessage('중복된 이름이 있습니다.');
    }
  };

  const onFileChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (!files) return;
    const file = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const previewImgUrl: string | null = reader.result as string;
      if (previewImgUrl) {
        setProfileImg(previewImgUrl);
      }
    };
  };

  //프로필 변경 제출
  const onSubmitProfile = () => {
    const dto = {
      nickname: name,
      introduce: detail
    };

    const formData = new FormData();
    formData.append('profileImg', profileImg);
    formData.append('dto', JSON.stringify(dto));
    postProfileMutate(formData);
  };

  return (
    <BasicModal
      width={450}
      height={500}
      onCloseModal={() => {
        setUserModalOpen(false);
      }}
    >
      <>
        <S.Title>프로필 수정</S.Title>
        <S.FlexWrapperColumn>
          <S.UserProfile>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => {
                onFileChanges(e);
              }}
              ref={inputRef}
            />
            {profileImg ? (
              <CircleIcon
                onClick={() => inputRef.current?.click()}
                imgUrl={profileImg}
                size={'big'}
              />
            ) : (
              <CircleIcon
                onClick={() => inputRef.current?.click()}
                imgUrl={profileImg}
                size={'big'}
              />
            )}
          </S.UserProfile>
          <S.UserInfo>
            <S.UserNameBox>
              <InputBox
                type="text"
                width={'200px'}
                height={35}
                textSize={14}
                onChange={onChange}
                borderRadius={10}
                maxLength={15}
                name="name"
                value={name}
                readonly={false}
                placeholder={'닉네임을 입력해주세요.'}
              />
              <BasicButton
                onClick={onSubmitNickname}
                color={'positive'}
                width={80}
                height={30}
                fontSize={14}
              >
                중복 확인
              </BasicButton>
              <S.ErrorMsg>{errorMessage}</S.ErrorMsg>
              {/*닉네임 중복 검사*/}
            </S.UserNameBox>
            <TextArea
              type={'text'}
              textSize={14}
              width={'200px'}
              maxLength={20}
              height={'70px'}
              onChange={onChange}
              borderRadius={10}
              name="detail"
              value={detail}
              readonly={false}
              placeholder={'자신을 나타내는 한 줄 소개를 적어주세요.'}
            />

            <BasicButton
              color={'blue'}
              fontSize={16}
              onClick={onSubmitProfile}
              width={70}
              height={30}
              borderRadius={5}
              disabled={errorMessage.length}
              children={<div>완료</div>}
            />
          </S.UserInfo>
        </S.FlexWrapperColumn>
      </>
    </BasicModal>
  );
};

export default UserModal;
