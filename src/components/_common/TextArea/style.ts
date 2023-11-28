import styled from 'styled-components';
import { flexCenter } from '../../../style/common';

interface TextAreaWrapperProps {
  width: string;
  height?: string;
  placeholder?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: number;
}

const TextAreaWrapper = styled.div<TextAreaWrapperProps>`
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.input};
  width: ${({ width }) => width};
  height: ${({ height }) => (height ? `${height}` : '100%')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 10)}px;
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
      ? `calc(100% - ${paddingLeft})`
      : '100%'};
  height: 100%;
  display: flex;
  background-color: inherit;
  font-size: ${({ textSize }) => (textSize ? textSize : 16)}px;
  cursor: ${({ readOnly }) => (readOnly ? 'pointer' : 'auto')};
  color: ${({ theme }) => theme.text};

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
