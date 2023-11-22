import React from 'react';
import { S } from './style';
import CircleIcon from '../CircleBox/CircleBox';
import BasicButton from '../BasicButton/BasicButton';
import { FollowingType } from '../../../types/FollowingType';

type CardPropsType = {
  width: string;
} & FollowingType;

const UserCard = ({
  width,
  followNickname,
  followDescription,
  followProfileImg
}: CardPropsType) => {
  return (
    <S.Wrapper $width={width}>
      <CircleIcon imgUrl={followProfileImg} size="medium" />
      <S.Nickname>{followNickname}</S.Nickname>
      <S.Introduction>{followDescription}</S.Introduction>
      <BasicButton color="positive" fontSize={16} width={100} height={35}>
        언팔로우
      </BasicButton>
    </S.Wrapper>
  );
};

export default UserCard;
