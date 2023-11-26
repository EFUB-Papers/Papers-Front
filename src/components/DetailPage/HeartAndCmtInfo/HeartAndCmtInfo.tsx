import { ReactComponent as FilledHeartLight } from 'asset/detailPage/FilledHeartLight.svg';
import { ReactComponent as EmptyHeartLight } from 'asset/detailPage/EmptyHeartLight.svg';
import { ReactComponent as FilledHeartDark } from 'asset/detailPage/FilledHeartDark.svg';
import { ReactComponent as EmptyHeartDark } from 'asset/detailPage/EmptyHeartDark.svg';
import { ReactComponent as CommentIconDark } from 'asset/detailPage/CommentIconDark.svg';
import { ReactComponent as CommentIconLight } from 'asset/detailPage/CommentIconLight.svg';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { modeState } from '../../../atom/mode';
import { S } from './style';
import {
  useDeleteScrapLikeMutation,
  usePostScrapLikeMutation
} from 'hooks/apis/likes';

type HeartProps = {
  scrapId: number;
  liked: boolean;
  heartCount: number;
  commentCount: number;
};
const HeartAndCmtInfo = ({
  scrapId,
  liked,
  heartCount,
  commentCount
}: HeartProps) => {
  const mode = useRecoilValue(modeState);
  const [isClickHeart, setIsClickHeart] = useState(liked);

  const { postScrapLikeAction } = usePostScrapLikeMutation();
  const { deleteScrapLikeAction } = useDeleteScrapLikeMutation();

  const onClick = () => {
    (isClickHeart !== undefined && isClickHeart) ||
    (isClickHeart === undefined && liked)
      ? deleteScrapLikeAction(scrapId)
      : postScrapLikeAction(scrapId);

    setIsClickHeart((prev) => !prev);
  };

  console.log(isClickHeart, liked);

  return (
    <S.Wrapper>
      <S.InfoWrapper>
        <S.HeartWrapper onClick={onClick}>
          {(isClickHeart !== undefined && isClickHeart) ||
          (isClickHeart === undefined && liked) ? (
            mode == 'light' ? (
              <FilledHeartLight />
            ) : (
              <FilledHeartDark />
            )
          ) : mode == 'light' ? (
            <EmptyHeartLight />
          ) : (
            <EmptyHeartDark />
          )}
        </S.HeartWrapper>
        <S.HeartCount>{heartCount}</S.HeartCount>
      </S.InfoWrapper>
      <S.InfoWrapper>
        {mode == 'light' ? <CommentIconLight /> : <CommentIconDark />}
        <S.HeartCount>{commentCount}</S.HeartCount>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default HeartAndCmtInfo;
