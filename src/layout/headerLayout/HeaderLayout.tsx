import React from 'react';
import { Outlet } from 'react-router-dom';
import { S } from './style';
import { useUserInfoQuery } from '../../hooks/apis/member';
import { LocalStorage } from '../../utils/localStorage';
import Header from '../../components/Header/Header/Header';

export type HeaderLayoutProps = {
  isWriteButton?: boolean;
};
const HeaderLayout = ({ isWriteButton = true }: HeaderLayoutProps) => {
  return (
    <S.Wrapper>
      <Header isWriteButton={isWriteButton} />
      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default HeaderLayout;
