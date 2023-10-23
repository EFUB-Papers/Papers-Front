import styled from 'styled-components';
import { flexCenter } from 'style/common';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  height: auto;
`;

const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  position: fixed;
  border: 1px solid ${({ theme }) => theme.COLOR.lineGrey};
  z-index: 10;
  background-color: ${({ theme }) => theme.background};
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
  width: calc(100% - 300px);
  display: flex;
  justify-content: center;
  margin-left: 300px;
  border: 3px solid blue;
`;

export const S = {
  Wrapper,
  NavBarWrapper,
  ButtonTextWrapper,
  ContentWrapper,
  ScrapButtonWrapper
};
