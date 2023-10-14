import S from './style';
type CircleSize = 'big' | 'medium' | 'small';

export type CircleIconType = {
  imgurl: string;
  size: CircleSize;
};

const CircleIcon = (props: CircleIconType) => {
  const { imgurl, size } = props;
  return (
    <>
      <S.CircleImg imgurl={imgurl} size={size} />
    </>
  );
};

export default CircleIcon;
