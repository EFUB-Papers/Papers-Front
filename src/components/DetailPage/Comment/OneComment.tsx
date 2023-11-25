import CircleIcon from '../../_common/CircleBox/CircleBox';
import { S } from './style';
import { OneCommentType } from '../../../types/CommentType';
import React, { useEffect, useState } from 'react';
import { ReplyMock } from '../../../mock/commentMock';
import ReplyList from './ReplyList';
import { ReactComponent as MoreDots } from 'asset/_common/moreDots.svg';
import MoreBox from 'components/_common/MoreBox/MoreBox';
import { useDeleteCommentMutation } from 'hooks/apis/comment';

const OneComment = ({ comment }: { comment: OneCommentType }) => {
  const [isSubCommentOpen, setIsSubCommentOpen] = useState(false);
  const [isMoreBoxOpen, setIsMoreBoxOpen] = useState(false);

  const { deleteCommentAction } = useDeleteCommentMutation();

  const openMoreBox = () => setIsMoreBoxOpen(true);
  const closeMoreBox = () => setIsMoreBoxOpen(false);

  const onDelete = () => {
    deleteCommentAction(comment.commentId);
  };

  useEffect(() => {
    console.log(isSubCommentOpen);
  }, []);

  return (
    <S.OneCommentWrapper>
      <S.OneCommentBox>
        <S.UserInfoBox isSub={true}>
          <CircleIcon imgUrl={comment.writerProfileImgUrl} size={'small'} />
          <S.NameBox>{comment.writerNickname}</S.NameBox>
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
              },
              {
                name: '수정하기',
                onClick: () => {
                  console.log('아직 댓글 수정 연결 안함');
                }
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
          대댓글 12개
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
