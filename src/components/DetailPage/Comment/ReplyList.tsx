import { R, S } from './style';
import CircleIcon from '../../_common/CircleBox/CircleBox';
import NewReply from './NewReply';
import React from 'react';
import { OneReplyType } from '../../../types/CommentType';

const ReplyList = ({ replyList }: { replyList: OneReplyType[] }) => {
  return (
    <S.SubCommentWrapper>
      {replyList.map((reply) => (
        <R.ReplyContainer>
          <S.UserInfoBox isSub={true}>
            <CircleIcon imgUrl={reply.replyWriterImg} size="verySmall" />
            <S.NameBox>{reply.replyWriterNickname}</S.NameBox>
          </S.UserInfoBox>
          <S.CommentContextBox>{reply.replyContent}</S.CommentContextBox>
        </R.ReplyContainer>
      ))}
      <NewReply />
    </S.SubCommentWrapper>
  );
};

export default ReplyList;
