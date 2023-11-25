import { R, S } from './style';
import CircleIcon from '../../_common/CircleBox/CircleBox';
import NewReply from './NewReply';
import React, { useState } from 'react';
import { OneReplyType } from '../../../types/CommentType';
import { useGetReplyListQuery } from 'hooks/apis/comment';
import { ReactComponent as MoreDots } from 'asset/_common/moreDots.svg';
import MoreBox from 'components/_common/MoreBox/MoreBox';
import { useDeleteReplyMutation } from './../../../hooks/apis/comment';

const ReplyList = ({ commentId }: { commentId: number }) => {
  const [isMoreBoxOpen, setIsMoreBoxOpen] = useState(false);

  const data = useGetReplyListQuery(commentId);
  const { deleteReplyAction } = useDeleteReplyMutation();

  const openMoreBox = () => setIsMoreBoxOpen(true);
  const closeMoreBox = () => setIsMoreBoxOpen(false);

  const onDelete = (replyId: number) => {
    deleteReplyAction(replyId);
  };

  return (
    <S.SubCommentWrapper>
      {data?.map((reply: OneReplyType) => (
        <R.ReplyContainer>
          <S.UserInfoBox isSub={true}>
            <CircleIcon imgUrl={reply.replyWriterProfileImg} size="verySmall" />
            <S.NameBox>{reply.replyWriterNickname}</S.NameBox>
            <S.MoreDotsWrappr>
              <MoreDots onClick={openMoreBox} />
            </S.MoreDotsWrappr>
            <MoreBox
              isMoreBoxOpen={isMoreBoxOpen}
              closeMoreBox={closeMoreBox}
              buttons={[
                {
                  name: '삭제하기',
                  onClick: () => onDelete(reply.replyId)
                },
                {
                  name: '수정하기',
                  onClick: () => {
                    console.log('아직 대댓글 수정 연결 안함');
                  }
                }
              ]}
            />
          </S.UserInfoBox>
          <S.CommentContextBox>{reply.replyContent}</S.CommentContextBox>
        </R.ReplyContainer>
      ))}
      <NewReply commentId={commentId} />
    </S.SubCommentWrapper>
  );
};

export default ReplyList;
