import { S } from './style';
import useInputs from 'hooks/useInputs';
import React, { useRef, useState } from 'react';
import InputBox from '../../_common/InputBox/InputBox';
import TextArea from '../../_common/TextArea/TextArea';
import BasicButton from '../../_common/BasicButton/BasicButton';
import CircleIcon from '../../_common/CircleBox/CircleBox';
import Cat from 'asset/profile.png';

type ProfileProps = {
  userName: string;
  userDetail: string;
  imgUrl: string;
};

const ProfileBox = ({ userName, userDetail, imgUrl }: ProfileProps) => {
  //첫번쨰는 이름 변경, 두번쨰는 한줄 소개 변경
  const [isEditMode, setIsEditMode] = useState(false);
  const [profileImg, setProfileImg] = useState(Cat);
  const inputRef = useRef<HTMLInputElement>(null);

  const { values, onChange } = useInputs({
    name: userName,
    detail: userDetail
  });

  const { name, detail } = values;

  //파일 변경 함수
  // const onFileChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   const files = e.target.files;
  //   if (!files) return;
  //   //여러개의 파일을 하나씩 순회하여 읽어오기
  //   const reader = new FileReader();
  //   reader.readAsDataURL(files[0]);
  //
  //   return new Promise<void>((resolve) => {
  //     reader.onload = () => {
  //       setProfileImg(reader.result || null);
  //       resolve();
  //     };
  //   });
  // };

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

            {/*<FlipCard*/}
            {/*  handleClickArr={() => {*/}
            {/*    inputRef.current?.click();*/}
            {/*  }}*/}
            {/*  content={[*/}
            {/*    <CircleIcon imgUrl={profileImg} size={'big'}>*/}
            {/*      <ImgIcon />*/}
            {/*    </CircleIcon>,*/}
            {/*    <CircleIcon imgUrl={profileImg} size={'big'} />*/}
            {/*  ]}*/}
            {/*/>*/}
          </S.UserProfile>
          <S.UserInfo>
            <InputBox
              type="text"
              width={'200px'}
              height={35}
              textSize={14}
              onChange={onChange}
              borderRadius={10}
              maxLength={10}
              name="name"
              value={name}
              readonly={false}
            />

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
            />

            <BasicButton
              color={'transparent'}
              fontSize={16}
              onClick={() => {
                setIsEditMode(false);
              }}
              width={70}
              height={30}
              borderRadius={5}
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
