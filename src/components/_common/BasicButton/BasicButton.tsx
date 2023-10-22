import S from 'components/_common/BasicButton/style';
import { PropsWithChildren } from 'react';
import React from 'react';

//positive는 파란 버튼, negative는 회색 버튼
type ButtonType = 'positive' | 'negative';

export type BasicButtonProps = {
  color: ButtonType;
  padding?: number;
  fontSize: number;
  width: number;
  height: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const BasicButton = ({
  children,
  width,
  height,
  ...props
}: PropsWithChildren<BasicButtonProps>) => {
  return (
    <S.ButtonWrapper width={width} height={height} {...props}>
      {children}
    </S.ButtonWrapper>
  );
};
export default BasicButton;
