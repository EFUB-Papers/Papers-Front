import { ReactComponent as FilledHeartLight } from 'asset/detailPage/FilledHeartLight.svg';
import { ReactComponent as EmptyHeartLight } from 'asset/detailPage/EmptyHeartLight.svg';
import { ReactComponent as FilledHeartDark } from 'asset/detailPage/FilledHeartDark.svg';
import { ReactComponent as EmptyHeartDark } from 'asset/detailPage/EmptyHeartDark.svg';
import { ReactComponent as CommentIconDark } from 'asset/detailPage/CommentIconDark.svg';
import { ReactComponent as CommentIconLight } from 'asset/detailPage/CommentIconLight.svg';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { modeState } from '../../../atom/mode';
import { S } from './style';

type HeartProps = {
  heartCount: number;
  commentCount: number;
};
const HeartAndCmtInfo = ({ heartCount, commentCount }: HeartProps) => {
  const mode = useRecoilValue(modeState);
  const [isClickHeart, setIsClickHeart] = useState(false);

  return (
    <S.Wrapper>
      <S.InfoWrapper>
        {isClickHeart ? (
          mode == 'light' ? (
            <FilledHeartLight onClick={() => setIsClickHeart(false)} />
          ) : (
            <FilledHeartDark onClick={() => setIsClickHeart(false)} />
          )
        ) : mode == 'light' ? (
          <EmptyHeartLight onClick={() => setIsClickHeart(true)} />
        ) : (
          <EmptyHeartDark />
        )}
        <S.HeartCount onClick={() => setIsClickHeart(true)}>
          {heartCount}
        </S.HeartCount>
      </S.InfoWrapper>
      <S.InfoWrapper>
        {mode == 'light' ? <CommentIconLight /> : <CommentIconDark />}
        <S.HeartCount>{commentCount}</S.HeartCount>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default HeartAndCmtInfo;
