import styled from 'styled-components';
import { flexCenter } from 'style/common';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
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
  background-color: white;
`;

const ButtonTextWrapper = styled.div`
  width: 55%;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-20']};
  ${flexCenter}
  justify-content: space-between;
`;

const ScrapButtonWrapper = styled.div`
  position: absolute;
  bottom: 3rem;
`;

const ContentWrapper = styled.div`
  width: calc(100vw - 300px);
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
