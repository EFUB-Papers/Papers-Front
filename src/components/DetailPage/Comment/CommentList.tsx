import { CommentMock } from '../../../mock/commentMock';
import OneComment from './OneComment';
import { OneCommentType } from '../../../types/CommentType';
import { S } from './style';

const CommentList = () => {
  return (
    <S.ListWrapper>
      {CommentMock.map((comment: OneCommentType) => (
        <OneComment comment={comment} key={comment.commentId} />
      ))}
    </S.ListWrapper>
  );
};
export default CommentList;
