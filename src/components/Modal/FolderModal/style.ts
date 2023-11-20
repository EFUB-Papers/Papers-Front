import styled from 'styled-components';
import { flexCenter } from '../../../style/common';

const Title = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  padding-left: 10px;
  height: 40px;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

const FlexBoxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ContentWrapper = styled.div`
  overflow: scroll;
  width: 400px;
  height: 430px;
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
  color: ${({ theme }) => theme.text};
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

const DeleteIconWrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
`;

const EditIconWrapper = styled.div`
  width: 80%;
  height: 50px;
  ${flexCenter};
  justify-content: space-between;
  position: relative;
`;

export const O = {
  Wrapper,
  IconContainer,
  ButtonWrapper
};

const SelectButton = styled.div`
  position: absolute;
  top: 20px;
  right: 50px;
`;

export const S = {
  ContentWrapper,
  Title,
  FlexBox,
  DeleteIconWrapper,
  EditIconWrapper,
  SelectButton,
  FlexBoxRow
};
