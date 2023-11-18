import { S } from './style';
import useInputs from 'hooks/useInputs';
import React, { useRef, useState } from 'react';
import InputBox from '../../_common/InputBox/InputBox';
import TextArea from '../../_common/TextArea/TextArea';
import BasicButton from '../../_common/BasicButton/BasicButton';
import CircleIcon from '../../_common/CircleBox/CircleBox';
import Cat from 'asset/profile.png';
import {
  usePostProfile,
  useSameNameMutation
} from '../../../hooks/apis/member';

type ProfileProps = {
  userName: string;
  userDetail: string;
  imgUrl: string;
};

const ProfileBox = ({ userName, userDetail, imgUrl }: ProfileProps) => {
  //첫번쨰는 이름 변경, 두번쨰는 한줄 소개 변경
  const [isEditMode, setIsEditMode] = useState(false);
  const [profileImg, setProfileImg] = useState(Cat);
  const [errorMessage, setErrorMessage] = useState<string>('');

  //이름 중복 검사
  const { postSameNameAction, data: hasSameName } = useSameNameMutation();
  //프로필 정보 변경
  const { postProfileMutate } = usePostProfile();

  const inputRef = useRef<HTMLInputElement>(null);

  const { values, onChange } = useInputs({
    name: userName,
    detail: userDetail
  });

  const { name, detail } = values;

  //닉네임 중복 검사
  const onSubmitNickname = async () => {
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
      const previewImgUrl = reader.result;
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
    postProfileMutate({
      profileImg,
      dto
    });
  };

  return (
    <S.ProfileWrapper>
      {isEditMode ? (
        <S.FlexColumnWrapper>
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
              color={'transparent'}
              fontSize={16}
              onClick={onSubmitProfile}
              width={70}
              height={30}
              borderRadius={5}
              disabled={errorMessage.length}
              children={<div>완료</div>}
            />
          </S.UserInfo>
        </S.FlexColumnWrapper>
      ) : (
        <>
          <S.FlexColumnWrapper>
            <S.UserProfile>
              <CircleIcon size="big" imgUrl={imgUrl} />
            </S.UserProfile>
            <S.UserInfo>
              <S.UserName>{userName}</S.UserName>
              <S.UserDetail>{userDetail}</S.UserDetail>
              <BasicButton
                color={'transparent'}
                fontSize={14}
                onClick={() => {
                  setIsEditMode(true);
                }}
                width={100}
                borderRadius={5}
                height={30}
                children={
                  <>
                    <div>프로필 수정</div>
                  </>
                }
              />
            </S.UserInfo>
          </S.FlexColumnWrapper>
        </>
      )}
    </S.ProfileWrapper>
  );
};
export default ProfileBox;
