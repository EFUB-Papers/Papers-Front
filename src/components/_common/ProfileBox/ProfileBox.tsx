import { S } from './style';
import CircleIcon from '../CircleBox/CircleBox';
import useInputs from 'hooks/useInputs';
import { useState } from 'react';
import InputBox from '../InputBox';
import { ReactComponent as WriteIcon } from 'asset/_common/greyPencil.svg';
import { ReactComponent as ActiveWriteIcon } from 'asset/_common/activePencil.svg';

type ProfileProps = {
  userName: string;
  userDetail: string;
  imgUrl: string;
};

const ProfileBox = ({ userName, userDetail, imgUrl }: ProfileProps) => {
  //첫번쨰는 이름 변경, 두번쨰는 한줄 소개 변경
  const [isEditMode, setIsEditMode] = useState([false, false]);

  const onClickNameEdit = () => {
    setIsEditMode([true, false]);
  };

  const { values, onChange } = useInputs({
    name: ' ',
    detail: ''
  });

  return (
    <S.ProfileWrapper>
      <CircleIcon size="big" imgurl={imgUrl} />
      <S.UserInfo>
        {isEditMode[0] ? (
          <S.FlexWrapper>
            <InputBox
              type="text"
              width={180}
              height={45}
              onChange={onChange}
              borderRadius={10}
              name="name"
              value={values.name}
              readonly={false}
              children={
                <ActiveWriteIcon
                  onClick={() => {
                    setIsEditMode([false, false]);
                  }}
                />
              }
            />
          </S.FlexWrapper>
        ) : (
          <S.FlexWrapper>
            <S.UserName>{userName}</S.UserName>
            <WriteIcon
              onClick={() => {
                onClickNameEdit();
              }}
            />
          </S.FlexWrapper>
        )}
        {isEditMode[1] ? (
          <InputBox
            type="text"
            width={50}
            height={20}
            backgroundColor="blue"
            onChange={() => {}}
            name="name"
            value={values.detail}
            readonly={false}
          />
        ) : (
          <S.FlexWrapper>
            <S.UserDetail>{userDetail}</S.UserDetail>
            <WriteIcon
              onClick={() => {
                onClickNameEdit();
              }}
            />
          </S.FlexWrapper>
        )}
      </S.UserInfo>
    </S.ProfileWrapper>
  );
};
export default ProfileBox;
