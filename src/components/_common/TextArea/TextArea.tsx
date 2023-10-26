import S from './style';
import React, { ReactElement } from 'react';

type TextAreaProps = {
  width: number;
  height?: number;
  placeholder?: string;
  type: 'text' | 'button' | 'password';
  backgroundColor?: string;
  maxLength?: number;
  textSize?: number;
  disabled?: boolean;
  children?: ReactElement;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  name: string;
  value: string;
  readonly: boolean;
  border?: string;
  borderRadius?: number;
};

const TextArea = ({
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
}: TextAreaProps) => {
  const hasIcon = !!children;

  return (
    <S.TextAreaWrapper {...rest}>
      <S.TextArea
        textSize={textSize}
        autocomplete={'off'}
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
    </S.TextAreaWrapper>
  );
};

export default TextArea;
