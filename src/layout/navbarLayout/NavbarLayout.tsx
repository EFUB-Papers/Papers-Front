import { Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from 'asset/_common/logoAndTitle.svg';
import { ReactComponent as WriteIcon } from 'asset/_common/write.svg';
import BasicButton from 'components/_common/BasicButton/BasicButton';
import CircleIcon from 'components/_common/CircleBox/CircleBox';
import { S } from './style';

import MyMenu from './MyMenu';
const NavbarLayout = () => {
  return (
    <S.Wrapper>
      <S.NavBarWrapper>
        <Logo style={{ position: 'absolute', left: 0 }} />
        {/*프로필 소개글*/}
        <S.ProfileWrapper>
          <CircleIcon size="big" imgurl="" />
          <S.UserText>
            <S.UserName>나는 고양이다</S.UserName>
            <S.UserDetail>
              이것은 소개글입니다.
              <br /> 이것은 소개글입니다.
            </S.UserDetail>
          </S.UserText>
        </S.ProfileWrapper>
        <MyMenu />
        <S.ScrapButtonWrapper>
          <BasicButton width={150} height={50} color="positive" fontSize={22}>
            <S.ButtonTextWrapper>
              <div>스크랩</div>
              <WriteIcon />
            </S.ButtonTextWrapper>
          </BasicButton>
        </S.ScrapButtonWrapper>
      </S.NavBarWrapper>
      <Outlet />
    </S.Wrapper>
  );
};
export default NavbarLayout;
