import S from './style';
import { ReactElement } from 'react';

type CircleSize = 'big' | 'medium' | 'small' | 'verySmall';

export type CircleIconType = {
  imgUrl: string;
  size: CircleSize;
  children?: ReactElement;
  onClick?: () => void;
};

const CircleIcon = ({ onClick, children, ...props }: CircleIconType) => {
  return (
    <>
      <S.CircleImg onClick={onClick} {...props}>
        {children}
      </S.CircleImg>
    </>
  );
};

export default CircleIcon;
