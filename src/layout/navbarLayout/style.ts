import styled from 'styled-components';
import { flexCenter } from 'style/common';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  height: auto;
`;

const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 300px;
  position: fixed;
  border-right: 1px solid ${({ theme }) => theme.line};
  z-index: 10;
  background-color: ${({ theme }) => theme.background};
`;

const FlexWrapper = styled.div`
  ${flexCenter};
  flex-direction: column;
`;

const ButtonTextWrapper = styled.div`
  width: 55%;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-20']};
  ${flexCenter};
  justify-content: space-between;
`;

const ScrapButtonWrapper = styled.div`
  position: absolute;
  bottom: 3rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - 300px);
  margin-left: 300px;
`;

const LogoWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }

  display: flex;
  align-items: center;
`;

export const S = {
  Wrapper,
  NavBarWrapper,
  ButtonTextWrapper,
  ContentWrapper,
  ScrapButtonWrapper,
  LogoWrapper,
  FlexWrapper
};
