import CircleIcon from '../../_common/CircleBox/CircleBox';
import { S } from './style';
import { OneCommentType } from '../../../types/CommentType';
import React, { useEffect, useState } from 'react';
import ReplyList from './ReplyList';
import { ReactComponent as MoreDots } from 'asset/_common/moreDots.svg';
import MoreBox from 'components/_common/MoreBox/MoreBox';
import {
  useDeleteCommentMutation,
  useGetCommentListQuery
} from 'hooks/apis/comment';
import { timeHelper } from 'utils/timeHelper';

const OneComment = ({
  comment,
  replyNumber,
  scrapId
}: {
  comment: OneCommentType;
  scrapId: number;
  replyNumber: number;
}) => {
  const [isSubCommentOpen, setIsSubCommentOpen] = useState(false);
  const [isMoreBoxOpen, setIsMoreBoxOpen] = useState(false);
  // const { refetch } = useGetCommentListQuery(scrapId);

  const { deleteCommentAction } = useDeleteCommentMutation(scrapId);

  const openMoreBox = () => setIsMoreBoxOpen(true);
  const closeMoreBox = () => setIsMoreBoxOpen(false);

  const onDelete = () => {
    deleteCommentAction(comment.commentId);
    // refetch();
  };

  return (
    <S.OneCommentWrapper>
      <S.OneCommentBox>
        <S.UserInfoBox isSub={true}>
          <CircleIcon imgUrl={comment.writerProfileImgUrl} size={'small'} />
          <S.NameBox>{comment.writerNickname}</S.NameBox>
          <S.Time> {timeHelper(comment.createdAt)}</S.Time>
          <S.MoreDotsWrappr>
            <MoreDots onClick={openMoreBox} />
          </S.MoreDotsWrappr>
          <MoreBox
            isMoreBoxOpen={isMoreBoxOpen}
            closeMoreBox={closeMoreBox}
            buttons={[
              {
                name: '삭제하기',
                onClick: onDelete
              }
            ]}
          />
        </S.UserInfoBox>
        <S.CommentContextBox>{comment.commentContent}</S.CommentContextBox>
        <S.SubComment
          onClick={() => {
            setIsSubCommentOpen(!isSubCommentOpen);
          }}
        >
          {replyNumber && `대댓글 ${replyNumber}개`}
        </S.SubComment>
        {isSubCommentOpen && (
          <>
            <ReplyList commentId={comment.commentId} />
          </>
        )}
      </S.OneCommentBox>
    </S.OneCommentWrapper>
  );
};
export default OneComment;
