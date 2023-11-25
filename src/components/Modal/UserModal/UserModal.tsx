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
  userDetail
}: {
  imgUrl: string | null;
  userName: string;
  userDetail: string;
}) => {
  const setUserModalOpen = useSetRecoilState(userModalAtom);
  const { values, onChange } = useInputs({
    detail: userDetail
  });
  //두번째는 에러 메세지인지 여부
  const [message, setMessage] = useState<[string, boolean]>(['', false]);

  const [name, setName] = useState(userName);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isValidName = /^[a-zA-Z]+$/.test(event.target.value);
    if (isValidName) {
      setName(event.target.value);
    } else {
      setMessage(['띄어쓰기 없이 영어로 입력해주세요.', true]);
    }
  };

  const { detail } = values;

  const [profileImg, setProfileImg] = useState<string | null>();
  //이름 중복 검사
  const { postSameNameAction, data: hasSameName } = useSameNameMutation();
  //프로필 정보 변경
  const { postProfileMutate } = usePostProfile(userName);

  const inputRef = useRef<HTMLInputElement>(null);
  //닉네임 중복 검사
  const onSubmitNickname = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    postSameNameAction(name);
    if (hasSameName) {
      setMessage(['중복된 이름이 있습니다.', true]);
    } else {
      setMessage(['사용 가능한 닉네임입니다.', false]);
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

    for (const x of formData.entries()) {
      console.log(x);
    }
    postProfileMutate(formData);
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
                onChange={(e) => {
                  onChangeName(e);
                }}
                borderRadius={10}
                maxLength={15}
                name="name"
                value={name}
                readonly={false}
                placeholder={'닉네임을 입력해주세요.'}
              />
              <S.Message isError={message[1]}>{message[0]}</S.Message>
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
