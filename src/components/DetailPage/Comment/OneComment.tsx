import CircleIcon from '../../_common/CircleBox/CircleBox';
import { S } from './style';
import { OneCommentType } from '../../../types/CommentType';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { SubCommentMock } from '../../../mock/commentMock';

const OneComment = ({ comment }: { comment: OneCommentType }) => {
  const { commentId, commentContent, commentWriter, scrapId } = comment;
  const [isSubCommentOpen, setIsSubCommentOpen] = useState(false);

  useEffect(() => {
    console.log(isSubCommentOpen);
  }, []);
  return (
    <S.OneCommentWrapper>
      <OneCommentBox>
        <S.UserInfoBox isSub={true}>
          <CircleIcon imgUrl={''} size={'small'} />
          <S.NameBox>{commentWriter}</S.NameBox>
        </S.UserInfoBox>
        <CommentContextBox>{commentContent}</CommentContextBox>
        <SubComment
          onClick={() => {
            setIsSubCommentOpen(!isSubCommentOpen);
          }}
        >
          대댓글 12개
        </SubComment>

        {isSubCommentOpen &&
          SubCommentMock.map((comment) => (
            <SubCommentWrapper>
              <S.UserInfoBox isSub={true}>
                <CircleIcon imgUrl={''} size="small" />
                <S.NameBox>{comment.commentWriter}</S.NameBox>
              </S.UserInfoBox>
              <CommentContextBox>{comment.commentContent}</CommentContextBox>
            </SubCommentWrapper>
          ))}
      </OneCommentBox>
    </S.OneCommentWrapper>
  );
};
export default OneComment;

const OneCommentBox = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.line};
  padding: 10px;
`;

const CommentContextBox = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-left: 15px;
`;

const SubComment = styled.div`
  padding: 15px;
  color: ${({ theme }) => theme.COLOR.darkGrey};
`;

const SubCommentWrapper = styled.div`
  margin-left: 20px;
  padding: 10px;
  border-left: 3px solid ${({ theme }) => theme.line};
`;

const SubCommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
