import React, { useEffect } from 'react';
import { S } from './style';
import { ReactComponent as GoogleLoginButton } from 'asset/loginPage/googleLoginButton.svg';
import { useGoogleLogin } from '@react-oauth/google';
import { ReactComponent as LogoImg } from 'asset/_common/logoImg.svg';
import { ReactComponent as BlackLogo } from 'asset/_common/logoBlack.svg';
import { ReactComponent as WhiteLogo } from 'asset/_common/logoWhite.svg';
import mainImage from 'asset/loginPage/mainImage.png';
import searchBarImage from 'asset/loginPage/searchBarImage.png';
import folderImage from 'asset/loginPage/folderImage.png';
import toggleImage from 'asset/loginPage/toggleImage.png';
import previewImage from 'asset/loginPage/previewImage.png';
import profileCardImage from 'asset/loginPage/profileCardImage.png';
import mainText from 'asset/loginPage/mainText.png';
import searchBarText from 'asset/loginPage/searchBarText.png';
import folderText from 'asset/loginPage/folderText.png';
import toggleText from 'asset/loginPage/toggleText.png';
import previewText from 'asset/loginPage/previewText.png';
import profileCardText from 'asset/loginPage/profileCardText.png';
import { ReactComponent as ScrollMore } from 'asset/loginPage/scrollMore.svg';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  // 구글 로그인 페이지로 리다이렉션 (구글 계정 고르는 페이지)
  const onGoogleLogin = () => {
    window.location.href =
      'https://accounts.google.com/o/oauth2/v2/auth?client_id=166892546465-mvg7ktdjmtmk5r288qnp1060f8ajb0a1.apps.googleusercontent.com&redirect_uri=http://localhost:3000&response_type=code&scope=email+profile';
  };

  return (
    <S.Wrapper>
      {/* 로고 */}
      <S.LogoWrapper
        onClick={() => {
          navigate('/');
        }}
      >
        <LogoImg />
        <BlackLogo />
      </S.LogoWrapper>
      {/* 메인 */}
      <S.MainWrapper>
        <S.RowWrapper>
          <S.ContentWrapper>
            <S.Image src={mainText} $width={650} />
            <S.ButtonWrapper>
              {/* 게스트 버튼 */}
              <S.Button
                onClick={() => {
                  navigate('/');
                }}
                $color="mint"
              >
                게스트로 둘러보기
              </S.Button>
              {/* 구글 로그인 버튼 */}
              <S.Button onClick={onGoogleLogin}>
                <GoogleLoginButton />
              </S.Button>
            </S.ButtonWrapper>
          </S.ContentWrapper>
          <S.Image src={mainImage} $width={400} />
        </S.RowWrapper>
        {/* 스크롤 더보기 아이콘 */}
        <S.ScrollMoreWrapper>
          <ScrollMore />
        </S.ScrollMoreWrapper>
      </S.MainWrapper>

      {/* 섹션1*/}
      <S.Section $rows={2} $padding="10%">
        <S.Image
          src={searchBarText}
          $width={350}
          $marginRight={50}
          $justifySelf="end"
        />
        <S.Image src={searchBarImage} $width={500} />
        <S.Image
          src={folderImage}
          $width={350}
          $marginRight={50}
          $justifySelf="end"
        />
        <S.Image src={folderText} $width={500} />
      </S.Section>

      {/* 섹션2 */}
      <S.Section $rows={3}>
        <S.Image
          src={toggleText}
          $width={300}
          $marginRight={50}
          $justifySelf="end"
        />
        <S.Image src={toggleImage} $width={300} />
        <S.Image
          src={previewImage}
          $width={500}
          $marginRight={50}
          $justifySelf="end"
        />
        <S.Image src={previewText} $width={310} />
        <S.Image
          src={profileCardText}
          $width={370}
          $marginRight={50}
          $justifySelf="end"
        />
        <S.Image src={profileCardImage} $width={250} />
      </S.Section>
    </S.Wrapper>
  );
};

export default LoginPage;
