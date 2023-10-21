import S from "./style";
import { ReactElement } from "react";
import React from "react";

type InputBoxProps = {
  width: number;
  height: number;
  placeholder?: string;
  type: "text" | "button" | "password";
  backgroundColor: string;
  maxLength?: number;
  disabled?: boolean;
  children?: ReactElement;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  value: string;
  readonly: boolean;
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
  ...rest
}: InputBoxProps) => {
  const hasIcon = children ? true : false;

  return (
    <S.InputWrapper {...rest}>
      <S.Input
        autocomplete={"off"}
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
