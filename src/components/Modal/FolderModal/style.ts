import styled from 'styled-components';
import { flexCenter } from '../../../style/common';

const Title = styled.div`
  width: 90%;
  position: fixed;
  top: 20px;
  background-color: ${({ theme }) => theme.background};
  height: 50px;
  display: flex;
  align-items: center;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

const ContentWrapper = styled.div`
  overflow: scroll;
  width: 400px;
  height: 460px;
  position: relative;
`;

const Wrapper = styled.div`
  width: 360px;
  height: 43px;
  padding-bottom: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.line};
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

const IconContainer = styled.div<{ selected?: boolean }>`
  ${flexCenter};
  gap: 10px;
  font-size: ${({ selected }) => (selected == true ? 16 : 15)}px;
  font-weight: ${({ selected }) => (selected == true ? 600 : 400)};
  transition: font-size 0.3s;
`;

const ButtonWrapper = styled.div`
  cursor: pointer;
`;
export const O = {
  Wrapper,
  IconContainer,
  ButtonWrapper
};

export const S = {
  ContentWrapper,
  Title,
  FlexBox
};