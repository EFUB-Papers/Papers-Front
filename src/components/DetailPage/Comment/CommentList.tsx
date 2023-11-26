import { CommentMock } from '../../../mock/commentMock';
import OneComment from './OneComment';
import { OneCommentType } from '../../../types/CommentType';
import { S } from './style';
import { useParams } from 'react-router-dom';
import { useGetCommentListQuery } from 'hooks/apis/comment';

const CommentList = () => {
  const params = useParams();

  const data = useGetCommentListQuery(Number(params.scrapId!));

  return (
    <S.ListWrapper>
      {data &&
        data.map((comment: OneCommentType) => (
          <OneComment
            comment={comment}
            key={comment.commentId}
            scrapId={comment.scrapId}
          />
        ))}
    </S.ListWrapper>
  );
};
export default CommentList;
