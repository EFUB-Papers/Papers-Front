import { Outlet, useNavigate } from 'react-router-dom';
import { ReactComponent as WriteIcon } from 'asset/_common/write.svg';
import BasicButton from 'components/_common/BasicButton/BasicButton';
import { S } from './style';
import ProfileBox from 'components/FolderPage/ProfileBox/ProfileBox';
import MyMenu from 'components/FolderPage/MyMenu/MyMenu';
import { UserMock } from 'mock/userMock';
import Header from 'components/Header/Header/Header';
import React from 'react';

const NavbarLayout = () => {
  const { nickname, userDetail, imgUrl } = UserMock;
  const isMine = false;
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      {!isMine && <Header />}
      <S.NavBarWrapper>
        <S.FlexWrapper>
          {/*프로필 소개글*/}
          <ProfileBox
            userName={nickname}
            userDetail={userDetail}
            imgUrl={imgUrl}
          />
          {isMine && <MyMenu />}
          <S.ScrapButtonWrapper>
            <BasicButton width={150} height={50} color="positive" fontSize={22}>
              <S.ButtonTextWrapper>
                <div>스크랩</div>
                <WriteIcon />
              </S.ButtonTextWrapper>
            </BasicButton>
          </S.ScrapButtonWrapper>
        </S.FlexWrapper>
      </S.NavBarWrapper>

      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
export default NavbarLayout;
