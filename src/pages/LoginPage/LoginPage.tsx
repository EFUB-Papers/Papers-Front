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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { usePostLoginMutation } from 'hooks/apis/member';
import { setCookie } from 'utils/cookieStorage';

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginData, postLoginMutate } = usePostLoginMutation();

  // 구글 로그인 이벤트 핸들러
  const onGoogleLogin = useGoogleLogin({
    scope: 'email profile',
    // 구글 로그인 성공 시
    onSuccess: async ({ code }) => {
      postLoginMutate(code); // 로그인 api 호출
      // 쿠키에 액세스 토큰 저장
      if (loginData) {
        setCookie('papersToken', loginData.accessToken, {
          path: '/',
          secure: false,
          sameSite: 'none'
        });
      }
    },
    // 구글 로그인 실패 시
    onError: (errorResponse) => {
      console.error(errorResponse);
    },
    flow: 'auth-code'
  });

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