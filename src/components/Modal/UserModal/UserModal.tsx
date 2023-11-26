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
import { userModalAtom } from '../../../atom/modal';

const UserModal = ({
  imgUrl,
  userName,
  userDetail,
  userEmail
}: {
  imgUrl: string | null;
  userName: string;
  userDetail: string;
  userEmail: string;
}) => {
  const [name, setName] = useState(userName);
  const [profileImg, setProfileImg] = useState<string | null>();
  const [message, setMessage] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [isUniqueName, setIsUniqueName] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const setUserModalOpen = useSetRecoilState(userModalAtom);
  const {
    values: { detail },
    onChange
  } = useInputs({ detail: userDetail });

  //닉네임 중복 검사
  const { postSameNameAction, data: hasSameName } = useSameNameMutation();

  //프로필 정보 변경
  const { postProfileMutate } = usePostProfile(userName);

  //닉네임 수정시
  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setIsUniqueName(false);
    postSameNameAction(event.target.value);
    const isValid = /^[a-zA-Z0-9@.]+$/.test(event.target.value);
    setIsValidName(isValid);
    isValid
      ? setMessage('')
      : setMessage('띄어쓰기 없이 영어와 숫자만 입력해주세요.');
  };

  //닉네임 중복 검사
  const onSubmitNickname = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isValidName) {
      postSameNameAction(name);

      if (hasSameName !== 'undefined' && hasSameName) {
        setIsUniqueName(false);
        setMessage('중복된 이름이 있습니다.');
      } else {
        setIsUniqueName(true);
        setMessage('사용 가능한 닉네임입니다.');
      }
    }
  };

  const onFileChanges = () => {
    if (inputRef.current !== null && inputRef.current.files !== null) {
      const file = inputRef.current.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProfileImg(reader.result as string);
      };
    }
  };

  //프로필 변경 제출
  const onSubmitProfile = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const dto = {
      nickname: name,
      introduce: detail
    };
    const formData = new FormData();

    //프로필 이미지 담기
    if (
      inputRef.current &&
      inputRef.current.files &&
      inputRef.current.files[0]
    ) {
      formData.append('profileImg', inputRef.current.files[0]);
    } else {
      formData.append('profileImg', new Blob([]));
    }

    //유저 정보 데이터 담기
    formData.append(
      'dto',
      new Blob([JSON.stringify(dto)], {
        type: 'application/json'
      })
    );

    //에러 없으면 프로필 수정 요청 보내기
    if (isValidName) {
      if (isUniqueName) {
        postProfileMutate(formData);
      } else {
        !message && setMessage('중복 검사를 해주세요.');
      }
    } else {
      setMessage('띄어쓰기 없이 영어와 숫자만 입력해주세요.');
    }
  };

  return (
    <BasicModal
      width={350}
      height={480}
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
              onChange={onFileChanges}
              ref={inputRef}
            />
            {profileImg ? (
              <CircleIcon
                onClick={() => inputRef.current?.click()}
                imgUrl={profileImg}
                size={'big'}
              />
            ) : imgUrl ? (
              <CircleIcon
                onClick={() => inputRef.current?.click()}
                imgUrl={imgUrl}
                size={'big'}
              />
            ) : (
              <CircleIcon
                onClick={() => inputRef.current?.click()}
                imgUrl={'/assets/_common/Profile.jpg'}
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
                onChange={onChangeName}
                borderRadius={10}
                maxLength={20}
                name="name"
                value={name}
                readonly={false}
                placeholder={'닉네임을 입력해주세요.'}
              />
              <S.Message isError={!isValidName || !isUniqueName}>
                {message}
              </S.Message>
              <BasicButton
                onClick={onSubmitNickname}
                color={'positive'}
                width={80}
                height={30}
                fontSize={14}
                disabled={!name.length}
              >
                중복 확인
              </BasicButton>
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
              disabled={!hasSameName && !name.length && !detail.length}
              children={<div>완료</div>}
            />
          </S.UserInfo>
        </S.FlexWrapperColumn>
      </>
    </BasicModal>
  );
};

export default UserModal;
