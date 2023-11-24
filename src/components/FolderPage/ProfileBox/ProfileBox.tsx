import { S } from './style';
import React from 'react';
import BasicButton from '../../_common/BasicButton/BasicButton';
import { useRecoilState } from 'recoil';
import { userModalAtom } from '../../../atom/modal';
import UserModal from '../../Modal/UserModal/UserModal';
import { LocalStorage } from '../../../utils/localStorage';
import { useUserInfoQuery } from '../../../hooks/apis/member';
import CircleIcon from '../../_common/CircleBox/CircleBox';

export type ProfileProps = {
  userName: string;
  userDetail: string;
  imgUrl: string;
};

const ProfileBox = ({ userName, userDetail, imgUrl }: ProfileProps) => {
  const [userModalState, setUserModalState] = useRecoilState(userModalAtom);

  const nickname = LocalStorage.getNickname()!;
  const userInfo = useUserInfoQuery(nickname);

  return (
    <>
      <S.ProfileWrapper>
        <S.FlexWrapperColumn>
          <S.UserProfile>
            <CircleIcon size="big" imgUrl={userInfo?.profileImgUrl} />
          </S.UserProfile>
          <S.UserInfo>
            <S.UserName>{userInfo?.nickname}</S.UserName>
            <S.UserDetail>{userInfo?.introduce}</S.UserDetail>
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
