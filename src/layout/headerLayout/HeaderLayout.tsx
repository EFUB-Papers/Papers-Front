import React from 'react';
import { Outlet } from 'react-router-dom';
import { S } from './style';
import { useUserInfoQuery } from '../../hooks/apis/member';
import { LocalStorage } from '../../utils/localStorage';
import Header from '../../components/Header/Header/Header';

const HeaderLayout = () => {
  const isWriteButton = true;
  const nickname = LocalStorage.getNickname()!;
  console.log('nickname', nickname);
  const userInfo = useUserInfoQuery(nickname);
  console.log('useInfo', userInfo);
  return (
    <S.Wrapper>
      <Header isWriteButton={isWriteButton} userInfo={userInfo} />
      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default HeaderLayout;
