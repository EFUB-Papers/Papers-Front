import S from './style';
import React, { ReactElement } from 'react';

type InputBoxProps = {
  width: string;
  height?: number;
  placeholder?: string;
  type: 'text' | 'button' | 'password';
  maxLength?: number;
  textSize?: number;
  disabled?: boolean;
  children?: ReactElement;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  value: string;
  readonly: boolean;
  border?: string;
  borderRadius?: number;
};

const InputBox = ({
  type,
  placeholder,
  maxLength,
  disabled,
  children,
  onChange,
  name,
  readonly,
  value,
  textSize,
  ...rest
}: InputBoxProps) => {
  const hasIcon = !!children;
  return (
    <S.InputWrapper {...rest}>
      <S.Input
        textSize={textSize}
        autocomplete={'off'}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        onChange={onChange}
        hasIcon={hasIcon}
        name={name}
        readOnly={readonly}
        value={value}
      />
      {children}
    </S.InputWrapper>
  );
};

export default InputBox;
