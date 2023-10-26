import styled from 'styled-components';
import { flexCenter } from '../../../style/common';

interface TextAreaWrapperProps {
  width: number;
  height?: number;
  placeholder?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: number;
}

const TextAreaWrapper = styled.div<TextAreaWrapperProps>`
  background-color: ${({ theme }) => theme.input};
  width: ${({ width }) => width}px;
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 20)}px;
  display: flex;
  padding: 10px;
  border: ${({ border }) => (border ? border : 'none')};
  ${flexCenter};
`;

interface TextAreaProps {
  paddingLeft?: number;
  hasIcon: boolean;
  readOnly: boolean;
  autocomplete: 'on' | 'off';
  paddingTop?: number;
  textSize?: number;
}

const TextArea = styled.textarea<TextAreaProps>`
  width: ${({ hasIcon, paddingLeft }) =>
    hasIcon && !paddingLeft
      ? `calc(100% - 24px)`
      : hasIcon && paddingLeft
      ? `calc(100% - ${paddingLeft}px)`
      : '100%'};
  height: 100%;
  display: flex;
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
  TextAreaWrapper,
  TextArea
};

export default S;
