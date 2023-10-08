import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from 'asset/_common/logoAndTitle.svg';
import { ReactComponent as WriteIcon } from 'asset/_common/write.svg';
import BasicButton from 'components/_common/BasicButton';
import CircleIcon from 'components/_common/CircleBox';
import Profile from 'asset/mock/profile.png';
import { flexCenter } from 'style/common';

const NavbarLayout = () => {
  return (
    <S.Wrapper>
      <S.NavBarWrapper>
        <Logo />
        {/*프로필 소개글*/}
        <S.ProfileWrapper>
          <CircleIcon size="big" imgurl={Profile} />
          <S.UserText>
            <S.UserName>나는 고양이다</S.UserName>
            <S.UserDetail>
              이것은 소개글입니다.
              <br /> 이것은 소개글입니다.
            </S.UserDetail>
          </S.UserText>
        </S.ProfileWrapper>
        <BasicButton
          width={170}
          height={59}
          color="positive"
          fontSize={22}
          onClick={() => {}}
        >
          <S.ButtonTextWrapper>
            <div>스크랩</div>
            <WriteIcon />
          </S.ButtonTextWrapper>
        </BasicButton>
      </S.NavBarWrapper>
      <Outlet />
    </S.Wrapper>
  );
};
export default NavbarLayout;

const Wrapper = styled.div`
  width: 100%;
`;

const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 364px;
  height: 100vh;
  position: fixed;
  border: 1px solid grey;
`;

const ButtonTextWrapper = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;
`;

const ProfileWrapper = styled.div`
  width: 187px;
  height: 240px;
  color: black;
  ${flexCenter}
  flex-direction: column;
  gap: 5px;
  padding-top: 33px;
`;

const UserText = styled.div`
  margin-top: 33px;
`;

const UserName = styled.div`
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-24']};
  font-weight: 700;
  padding-bottom: 10px;
`;

const UserDetail = styled.div``;
const S = {
  Wrapper,
  NavBarWrapper,
  ButtonTextWrapper,
  ProfileWrapper,
  UserText,
  UserName,
  UserDetail
};
