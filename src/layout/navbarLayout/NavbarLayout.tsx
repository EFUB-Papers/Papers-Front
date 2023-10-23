import { Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from 'asset/_common/logoAndTitle.svg';
import { ReactComponent as WriteIcon } from 'asset/_common/write.svg';
import BasicButton from 'components/_common/BasicButton/BasicButton';
import { S } from './style';
import ProfileBox from 'components/_common/ProfileBox/ProfileBox';
import MyMenu from 'components/MyPage/MyMenu/MyMenu';
import { UserMock } from 'mock/userMock';
import Header from 'components/Header/Header/Header';

const NavbarLayout = () => {
  const { userName, userDetail, imgUrl } = UserMock;
  const isMine = false;
  return (
    <S.Wrapper>
      {!isMine && <Header />}
      <S.NavBarWrapper>
        <Logo style={{ position: 'absolute', left: 10 }} />
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
      </S.NavBarWrapper>
      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
export default NavbarLayout;
