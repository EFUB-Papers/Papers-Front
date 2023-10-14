import styled from 'styled-components';
import { flexCenter } from 'style/common';

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
  margin-top: 6rem;
  width: 187px;
  height: 240px;
  color: black;
  ${flexCenter}
  flex-direction: column;
  gap: 5px;
  padding-top: 1.8rem;
`;

const UserText = styled.div`
  margin-top: 1.5rem;
`;

const UserName = styled.div`
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-24']};
  font-weight: 700;
  padding-bottom: 10px;
`;

const UserDetail = styled.div`
  color: ${({ theme }) => theme.COLOR.darkGrey};
  line-height: 1.5;
`;

const ScrapButtonWrapper = styled.div`
  position: absolute;
  bottom: 3rem;
`;

const MenuWrapper = styled.div`
  width: 180px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: 'icon1 text1' 'icon2 text2' 'icon3 text3' 'icon4 text4';
  grid-template-rows: 40px 40px 40px 40px;
  gap: 2rem;
  margin-top: 4rem;
  margin-left: 2rem;
`;

const MenuIcon = styled.div`
  ${flexCenter}
`;

const OneMenuWrapper = styled.div`
  ${flexCenter}
`;

const MenuText = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
`;

export const S = {
  Wrapper,
  NavBarWrapper,
  ButtonTextWrapper,
  ProfileWrapper,
  ScrapButtonWrapper,
  UserText,
  UserName,
  UserDetail
};

export const M = {
  MenuWrapper,
  MenuText,
  OneMenuWrapper,
  MenuIcon
};
