import { S } from './style';
import React from 'react';
import BasicButton from '../../_common/BasicButton/BasicButton';
import CircleIcon from '../../_common/CircleBox/CircleBox';
import { useRecoilState } from 'recoil';
import { userModalAtom } from '../../../atom/modal';
import UserModal from '../../Modal/UserModal/UserModal';

export type ProfileProps = {
  userName: string;
  userDetail: string;
  imgUrl: string;
};

const ProfileBox = ({ userName, userDetail, imgUrl }: ProfileProps) => {
  const [userModalState, setUserModalState] = useRecoilState(userModalAtom);

  return (
    <>
      {userModalState && (
        <UserModal
          userName={userName}
          userDetail={userDetail}
          imgUrl={imgUrl}
        />
      )}

      <S.ProfileWrapper>
        <S.FlexWrapperColumn>
          <S.UserProfile>
            <CircleIcon size="big" imgUrl={imgUrl} />
          </S.UserProfile>
          <S.UserInfo>
            <S.UserName>{userName}</S.UserName>
            <S.UserDetail>{userDetail}</S.UserDetail>
            <BasicButton
              color={'blue'}
              fontSize={14}
              onClick={() => setUserModalState(true)}
              width={100}
              borderRadius={5}
              height={30}
            >
              프로필 수정
            </BasicButton>
          </S.UserInfo>
        </S.FlexWrapperColumn>
      </S.ProfileWrapper>
    </>
  );
};

export default ProfileBox;
