import NewComment from './NewComment';
import CommentList from './CommentList';
import { S } from './style';

const Comment = ({ scrapId }: { scrapId: number }) => {
  return (
    <S.Wrapper>
      <NewComment scrapId={scrapId} />
      <CommentList />
    </S.Wrapper>
  );
};

export default Comment;
