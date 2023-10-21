import styled from "styled-components";
import { flexCenter } from "style/common";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 20%;
  height: 100vh;
  position: fixed;
  border: 1px solid ${({ theme }) => theme.COLOR.lineGrey};
  z-index: 10;
  background-color: white;
`;

const ButtonTextWrapper = styled.div`
  width: 55%;
  font-size: ${({ theme }) => theme.TEXT_SIZE["text-20"]};
  ${flexCenter}
  justify-content: space-between;
`;

const ScrapButtonWrapper = styled.div`
  position: absolute;
  bottom: 3rem;
`;

const MenuWrapper = styled.div`
  width: 180px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-areas: "icon1 text1" "icon2 text2" "icon3 text3" "icon4 text4";
  grid-template-rows: 40px 40px 40px 40px;
  gap: 2rem;
  margin-top: 4rem;
  margin-left: 1rem;
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
  margin-left: -10px;
`;

const ContentWrapper = styled.div`
  width: 80%;
  left: 300px;
  min-height: 100vh;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
`;
export const S = {
  Wrapper,
  NavBarWrapper,
  ButtonTextWrapper,
  ContentWrapper,
  ScrapButtonWrapper
};

export const M = {
  MenuWrapper,
  MenuText,
  OneMenuWrapper,
  MenuIcon
};
