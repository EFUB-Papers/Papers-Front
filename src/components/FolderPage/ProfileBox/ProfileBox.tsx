import { S } from './style';
import React from 'react';
import BasicButton from '../../_common/BasicButton/BasicButton';
import { useSetRecoilState } from 'recoil';
import { userModalAtom } from '../../../atom/modal';
import CircleIcon from '../../_common/CircleBox/CircleBox';
import FollowButton from 'components/_common/FollowButton/FollowButton';

export type ProfileBoxProps = {
  isMine: boolean;
  nickname: string;
  introduce: string;
  profileImgUrl: string;
};

const ProfileBox = ({
  isMine,
  nickname,
  introduce,
  profileImgUrl
}: ProfileBoxProps) => {
  const setUserModalState = useSetRecoilState(userModalAtom);

  return (
    <>
      <S.ProfileWrapper>
        <S.FlexWrapperColumn>
          <S.UserProfile>
            <CircleIcon size="big" imgUrl={profileImgUrl} />
          </S.UserProfile>
          <S.UserInfo>
            <S.UserName>{nickname}</S.UserName>
            <S.UserDetail>{introduce}</S.UserDetail>
            {isMine ? (
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
            ) : (
              <FollowButton nickname={nickname} />
            )}
          </S.UserInfo>
        </S.FlexWrapperColumn>
      </S.ProfileWrapper>
    </>
  );
};

export default ProfileBox;
