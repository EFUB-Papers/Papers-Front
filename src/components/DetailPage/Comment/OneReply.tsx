import { R, S } from './style';
import CircleIcon from 'components/_common/CircleBox/CircleBox';
import MoreBox from 'components/_common/MoreBox/MoreBox';
import { ReactComponent as MoreDots } from 'asset/_common/moreDots.svg';
import { useState } from 'react';
import { useDeleteReplyMutation } from 'hooks/apis/comment';
import { OneReplyType } from 'types/CommentType';

const OneReply = ({
  reply,
  commentId
}: {
  commentId: number;
  reply: OneReplyType;
}) => {
  const [isMoreBoxOpen, setIsMoreBoxOpen] = useState(false);

  const openMoreBox = () => setIsMoreBoxOpen(true);
  const closeMoreBox = () => setIsMoreBoxOpen(false);

  const { deleteReplyAction } = useDeleteReplyMutation(commentId);

  const onDelete = (replyId: number) => {
    deleteReplyAction(replyId);
  };

  return (
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
            }
          ]}
        />
      </S.UserInfoBox>
      <S.CommentContextBox>{reply.replyContent}</S.CommentContextBox>
    </R.ReplyContainer>
  );
};
export default OneReply;
