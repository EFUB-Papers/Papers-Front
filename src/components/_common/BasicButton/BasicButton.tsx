import S from 'components/_common/BasicButton/style';
import React, { PropsWithChildren } from 'react';

//positive는 파란 버튼, negative는 회색 버튼
//투명은 완료 버튼
type ButtonType = 'positive' | 'negative' | 'transparent';

export type BasicButtonProps = {
  color: ButtonType;
  padding?: number;
  fontSize: number;
  width: number;
  height: number;
  borderRadius?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: any;
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
