import styled from 'styled-components';
import { flexCenter } from '../../../style/common';

const Wrapper = styled.div`
  position: relative;
  width: 550px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 25px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  z-index: 100;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: -5px;
  top: 10px;
`;
const SelectWrapper = styled.div<{ value: string }>`
  width: 100px;
  height: 30px;
  align-items: center;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const SelectBox = styled.ul`
  border: none;
  font-size: 14px;
  ${flexCenter};
`;

const OptionListWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.COLOR.lightGrey};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.selectBox};
`;

const OptionBox = styled.li`
  border: none;
  height: 30px;
  width: 80px;
  ${flexCenter};

  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const SearchInput = styled.input<{
  onKeyPress: any;
}>`
  width: 285px;
  height: 30px;
  font-size: 16px;
  font-weight: 400;
  padding-left: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  right: 15px;
`;

export const S = {
  Wrapper,
  IconWrapper,
  SelectWrapper,
  SearchIconWrapper,
  OptionListWrapper,
  SearchInput,
  OptionBox,
  SelectBox
};
