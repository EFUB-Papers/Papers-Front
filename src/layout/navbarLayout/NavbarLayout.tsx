import { Outlet, useNavigate } from 'react-router-dom';
import { ReactComponent as WriteIcon } from 'asset/_common/write.svg';
import BasicButton from 'components/_common/BasicButton/BasicButton';
import { S } from './style';
import ProfileBox from 'components/_common/ProfileBox/ProfileBox';
import MyMenu from 'components/MyPage/MyMenu/MyMenu';
import { UserMock } from 'mock/userMock';
import Header from 'components/Header/Header/Header';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { modeState } from '../../atom/mode';
import { ReactComponent as BlackLogo } from 'asset/_common/logoBlack.svg';
import { ReactComponent as WhiteLogo } from 'asset/_common/logoWhite.svg';
import { ReactComponent as LogoImg } from 'asset/_common/logoImg.svg';

const NavbarLayout = () => {
  const { userName, userDetail, imgUrl } = UserMock;
  const isMine = false;
  const mode = useRecoilValue(modeState);
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      {!isMine && <Header />}
      <S.NavBarWrapper>
        <S.LogoWrapper>
          <LogoImg />
          {mode == 'day' ? (
            <BlackLogo
              onClick={() => {
                navigate('/');
              }}
            />
          ) : (
            <WhiteLogo
              onClick={() => {
                navigate('/');
              }}
            />
          )}
        </S.LogoWrapper>
        <S.FlexWrapper>
          {/*프로필 소개글*/}
          <ProfileBox
            userName={userName}
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
