import styled from 'styled-components';
import { flexCenter } from '../../../style/common';

interface IInputWrapper {
  width: number;
  height?: number;
  placeholder?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: number;
}

const InputWrapper = styled.div<IInputWrapper>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#f3f3f3'};
  width: ${({ width }) => width}px;
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 20)}px;
  display: flex;
  padding: 0 5px 0 5px;
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
  background-color: inherit;
  color: black;
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
