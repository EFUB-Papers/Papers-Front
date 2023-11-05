import Header, { HeaderProps } from 'components/Header/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { S } from './style';

const HeaderLayout = ({ isWriteButton = true }: HeaderProps) => {
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
