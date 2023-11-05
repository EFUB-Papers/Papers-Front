import { S } from './style';
import useInputs from 'hooks/useInputs';
import { useState } from 'react';
import InputBox from '../../_common/InputBox/InputBox';
import TextArea from '../../_common/TextArea/TextArea';
import BasicButton from '../../_common/BasicButton/BasicButton';
import CircleIcon from '../../_common/CircleBox/CircleBox';
import FlipCard from '../../_common/FlipCard/FlipCard';
import Cat from 'asset/profile.png';
import { ReactComponent as ImgIcon } from 'asset/_common/imageIcon.svg';

type ProfileProps = {
  userName: string;
  userDetail: string;
  imgUrl: string;
};

const ProfileBox = ({ userName, userDetail, imgUrl }: ProfileProps) => {
  //첫번쨰는 이름 변경, 두번쨰는 한줄 소개 변경
  const [isEditMode, setIsEditMode] = useState(false);

  const { values, onChange } = useInputs({
    name: userName,
    detail: userDetail
  });

  const [isImgModalOpen, setIsImgModalOpen] = useState(false);

  const { name, detail } = values;

  const onClicka = () => {
    console.log('aa');
  };

  return (
    <S.ProfileWrapper>
      {isEditMode ? (
        <S.FlexColumnWrapper>
          <S.UserProfile>
            <FlipCard
              handleClickArr={onClicka}
              content={[
                <CircleIcon imgUrl={Cat} size={'big'}>
                  <ImgIcon />
                </CircleIcon>,
                <CircleIcon imgUrl={Cat} size={'big'} />
              ]}
            />
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
