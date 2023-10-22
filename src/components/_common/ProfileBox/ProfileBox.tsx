import { S } from './style';
import CircleIcon from '../CircleBox/CircleBox';
import useInputs from 'hooks/useInputs';
import { useState } from 'react';
import InputBox from '../InputBox';
import theme from 'style/theme';
import { ReactComponent as WriteIcon } from 'asset/_common/greyPencil.svg';

type ProfileProps = {
  userName: string;
  userDetail: string;
  imgUrl: string;
};

const ProfileBox = ({ userName, userDetail, imgUrl }: ProfileProps) => {
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
          <InputBox
            type="text"
            width={130}
            height={20}
            backgroundColor={theme.COLOR.lineGrey}
            onChange={onChange}
            name="name"
            value={values.name}
            readonly={false}
            children={
              <WriteIcon
                onClick={() => {
                  onClickNameEdit();
                }}
              />
            }
          />
        ) : (
          <S.NameWrapper>
            <S.UserName>{userName}</S.UserName>
            <WriteIcon
              onClick={() => {
                onClickNameEdit();
              }}
            />
          </S.NameWrapper>
        )}
        {isEditMode[1] ? (
          <InputBox
            type="text"
            width={50}
            height={20}
            backgroundColor={theme.COLOR.lightGrey}
            onChange={() => {}}
            name="name"
            value={values.detail}
            readonly={false}
          />
        ) : (
          <S.UserDetail>{userDetail}</S.UserDetail>
        )}
      </S.UserInfo>
    </S.ProfileWrapper>
  );
};
export default ProfileBox;
