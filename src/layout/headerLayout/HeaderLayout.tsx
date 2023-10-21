import Header from 'components/_common/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { S } from './style';

const HeaderLayout = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default HeaderLayout;
