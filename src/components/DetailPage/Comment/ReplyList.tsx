import { R, S } from './style';
import CircleIcon from '../../_common/CircleBox/CircleBox';
import NewReply from './NewReply';
import { useState } from 'react';
import { OneReplyType } from '../../../types/CommentType';
import { useGetReplyListQuery } from 'hooks/apis/comment';
import MoreBox from 'components/_common/MoreBox/MoreBox';
import { useDeleteReplyMutation } from './../../../hooks/apis/comment';
import OneReply from './OneReply';

const ReplyList = ({ commentId }: { commentId: number }) => {
  const { data } = useGetReplyListQuery(commentId);

  return (
    <S.SubCommentWrapper>
      {data?.map((reply: OneReplyType) => (
        <OneReply reply={reply} commentId={commentId} />
      ))}
      <NewReply commentId={commentId} />
    </S.SubCommentWrapper>
  );
};

export default ReplyList;
