import { R, S } from './style';
import CircleIcon from '../../_common/CircleBox/CircleBox';
import NewReply from './NewReply';
import React from 'react';
import { OneReplyType } from '../../../types/CommentType';
import { useGetReplyListQuery } from 'hooks/apis/comment';

const ReplyList = ({ commentId }: { commentId: number }) => {
  const data = useGetReplyListQuery(commentId);

  return (
    <S.SubCommentWrapper>
      {data?.map((reply: OneReplyType) => (
        <R.ReplyContainer>
          <S.UserInfoBox isSub={true}>
            <CircleIcon imgUrl={reply.replyWriterProfileImg} size="verySmall" />
            <S.NameBox>{reply.replyWriterNickname}</S.NameBox>
          </S.UserInfoBox>
          <S.CommentContextBox>{reply.replyContent}</S.CommentContextBox>
        </R.ReplyContainer>
      ))}
      <NewReply commentId={commentId} />
    </S.SubCommentWrapper>
  );
};

export default ReplyList;
