import React from 'react';
import { S } from './style';
import CircleIcon from '../CircleBox/CircleBox';
import BasicButton from '../BasicButton/BasicButton';

export type UserCardProps = {
  width: string;
  userId: number;
  imgurl: string;
  nickname: string;
  introduction: string;
};

const UserCard = (props: UserCardProps) => {
  return (
    <S.Wrapper $width={props.width}>
      <CircleIcon imgurl={props.imgurl} size="medium" />
      <S.Nickname>{props.nickname}</S.Nickname>
      <S.Introduction>{props.introduction}</S.Introduction>
      <BasicButton color="positive" fontSize={16} width={100} height={35}>
        언팔로우
      </BasicButton>
    </S.Wrapper>
  );
};

export default UserCard;
