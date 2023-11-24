import CircleIcon from '../../_common/CircleBox/CircleBox';
import { S } from './style';
import { OneCommentType } from '../../../types/CommentType';
import React, { useEffect, useState } from 'react';
import { ReplyMock } from '../../../mock/commentMock';
import ReplyList from './ReplyList';

const OneComment = ({ comment }: { comment: OneCommentType }) => {
  const {
    commentId,
    commentContent,
    writerNickname,
    writerProfileImgUrl,
    scrapId
  } = comment;
  const [isSubCommentOpen, setIsSubCommentOpen] = useState(false);

  useEffect(() => {
    console.log(isSubCommentOpen);
  }, []);
  return (
    <S.OneCommentWrapper>
      <S.OneCommentBox>
        <S.UserInfoBox isSub={true}>
          <CircleIcon imgUrl={writerProfileImgUrl} size={'small'} />
          <S.NameBox>{writerNickname}</S.NameBox>
        </S.UserInfoBox>
        <S.CommentContextBox>{commentContent}</S.CommentContextBox>
        <S.SubComment
          onClick={() => {
            setIsSubCommentOpen(!isSubCommentOpen);
          }}
        >
          대댓글 12개
        </S.SubComment>
        {isSubCommentOpen && (
          <>
            <ReplyList commentId={commentId} />
          </>
        )}
      </S.OneCommentBox>
    </S.OneCommentWrapper>
  );
};
export default OneComment;
