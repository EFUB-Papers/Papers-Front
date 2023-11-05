import NewComment from './NewComment';
import CommentList from './CommentList';
import { S } from './style';

const Comment = () => {
  return (
    <S.Wrapper>
      <NewComment />
      <CommentList />
    </S.Wrapper>
  );
};

export default Comment;
