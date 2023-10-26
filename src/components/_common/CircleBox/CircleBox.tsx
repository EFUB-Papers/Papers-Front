import S from './style';
import { ReactElement } from 'react';

type CircleSize = 'big' | 'medium' | 'small';

export type CircleIconType = {
  imgUrl: string;
  size: CircleSize;
  children?: ReactElement;
};

const CircleIcon = ({ children, ...props }: CircleIconType) => {
  return (
    <>
      <S.CircleImg {...props}>{children}</S.CircleImg>
    </>
  );
};

export default CircleIcon;
