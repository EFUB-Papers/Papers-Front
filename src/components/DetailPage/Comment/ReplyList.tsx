import { R, S } from './style';
import NewReply from './NewReply';
import { OneReplyType } from '../../../types/CommentType';
import { useGetReplyListQuery } from 'hooks/apis/comment';
import OneReply from './OneReply';

const ReplyList = ({
  commentId,
  scrapId
}: {
  commentId: number;
  scrapId: number;
}) => {
  const { data } = useGetReplyListQuery(commentId);

  return (
    <S.SubCommentWrapper>
      {data?.map((reply: OneReplyType) => (
        <OneReply reply={reply} commentId={commentId} scrapId={scrapId} />
      ))}
      <NewReply commentId={commentId} scrapId={scrapId} />
    </S.SubCommentWrapper>
  );
};

export default ReplyList;
