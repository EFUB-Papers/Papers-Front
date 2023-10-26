import styled from 'styled-components';
import { flexCenter } from '../../../style/common';

interface IInputWrapper {
  width: number;
  height?: number;
  placeholder?: string;
  border?: string;
  borderRadius?: number;
}

const InputWrapper = styled.div<IInputWrapper>`
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};
  width: ${({ width }) => width}px;
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 20)}px;
  display: flex;
  padding: 10px;
  border: ${({ border }) => (border ? border : 'none')};
  ${flexCenter};
`;

interface IInput {
  paddingLeft?: number;
  hasIcon: boolean;
  readOnly: boolean;
  autocomplete: 'on' | 'off';
  paddingTop?: number;
  textSize?: number;
}

const Input = styled.input<IInput>`
  width: ${({ hasIcon, paddingLeft }) =>
    hasIcon && !paddingLeft
      ? `calc(100% - 24px)`
      : hasIcon && paddingLeft
      ? `calc(100% - ${paddingLeft}px)`
      : '100%'};
  height: 100%;
  display: flex;
  background-color: inherit;
  color: ${({ theme }) => theme.text};
  font-size: ${({ textSize }) => (textSize ? textSize : 16)}px;
  cursor: ${({ readOnly }) => (readOnly ? 'pointer' : 'auto')};

  &:hover {
    cursor: ${({ readOnly }) => (readOnly ? 'pointer' : 'auto')};
  }

  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : 0)}px;
`;

const S = {
  InputWrapper,
  Input
};

export default S;
