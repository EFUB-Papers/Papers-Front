import S from 'components/_common/BasicButton/style';
import React, { PropsWithChildren } from 'react';

type ButtonType = 'positive' | 'grey' | 'blue' | 'transparent';

export type BasicButtonProps = {
  color: ButtonType;
  padding?: number;
  fontSize: number;
  width: number;
  height: number;
  borderRadius?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: any;
  textColor?: string;
};

const BasicButton = ({
  children,
  width,
  height,
  disabled,
  ...props
}: PropsWithChildren<BasicButtonProps>) => {
  return (
    <S.ButtonWrapper
      width={width}
      height={height}
      disabled={disabled}
      {...props}
    >
      {children}
    </S.ButtonWrapper>
  );
};
export default BasicButton;
