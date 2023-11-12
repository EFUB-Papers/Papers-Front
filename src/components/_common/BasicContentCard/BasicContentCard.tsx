import { S } from './style';
import { ReactComponent as MoreDotsIcon } from 'asset/_common/moreDots.svg';
import { ReactComponent as HeartIcon } from 'asset/_common/heart.svg';
import { ReactComponent as CommentIcon } from 'asset/_common/comment.svg';

type BasicCardProps = {
  imgUrl: string;
  postTitle: string;
  postDetail: string;
  originTitle: string;
  originLink: string;
  postId: number;
  // Writer: UserType;
};

const BasicContentCard = (props: BasicCardProps) => {
  const { imgUrl, postDetail, postTitle, originTitle, postId } = props;

  return (
    <S.Wrapper
      isBorderBottom={true}
      onClick={() => {
        console.log(postId);
      }}
    >
      <MoreDotsIcon style={{ position: 'absolute', right: 0, top: 0 }} />
      <S.PostImg imgUrl={imgUrl} />

      <S.PostContentWrapper>
        <S.PostTitle>{postTitle}</S.PostTitle>
        <S.OriginalTitle>{originTitle}</S.OriginalTitle>
        <S.PostDetail>{postDetail}</S.PostDetail>
      </S.PostContentWrapper>

      <S.IconFlexWrapper>
        <S.IconContainer>
          <HeartIcon />
          <S.IconText>23</S.IconText>
        </S.IconContainer>
        <S.IconContainer>
          <CommentIcon />
          <S.IconText>11</S.IconText>
        </S.IconContainer>
      </S.IconFlexWrapper>
    </S.Wrapper>
  );
};

export default BasicContentCard;
