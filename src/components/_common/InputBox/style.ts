import styled from 'styled-components';

interface IInputWrapper {
  width: number;
  height: number;
  placeholder?: string;
  backgroundColor: string;
}

const InputWrapper = styled.div<IInputWrapper>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor && backgroundColor};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
`;

interface IInput {
  paddingLeft?: number;
  hasIcon: boolean;
  readOnly: boolean;
  autocomplete: 'on' | 'off';
  paddingTop?: number;
}

const Input = styled.input<IInput>`
  width: ${({ hasIcon, paddingLeft }) =>
    hasIcon && !paddingLeft
      ? `calc(100% - 24px)`
      : hasIcon && paddingLeft
      ? `calc(100% - ${paddingLeft}px)`
      : '100%'};
  height: 100%;
  background-color: inherit;
  color: ${({ theme }) => theme.background};

  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
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
