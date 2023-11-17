import { S } from './style';
import { ReactComponent as MoreDotsIcon } from 'asset/_common/moreDots.svg';
import { ReactComponent as HeartIcon } from 'asset/_common/heart.svg';
import { ReactComponent as CommentIcon } from 'asset/_common/comment.svg';

type BasicCardProps = {
  imgUrl: string;
  scrapTitle: string;
  scrapContent: string;
  originTitle: string;
  originLink: string;
  scrapId: number;
  // Writer: UserType;
};

const BasicContentCard = (props: BasicCardProps) => {
  const { imgUrl, scrapContent, scrapTitle, originTitle, scrapId } = props;

  return (
    <S.Wrapper
      isBorderBottom={true}
      onClick={() => {
        console.log(scrapId);
      }}
    >
      <MoreDotsIcon style={{ position: 'absolute', right: 0, top: 0 }} />
      <S.PostImg imgUrl={imgUrl} />

      <S.PostContentWrapper>
        <S.PostTitle>{scrapTitle}</S.PostTitle>
        <S.OriginalTitle>{originTitle}</S.OriginalTitle>
        <S.PostDetail>{scrapContent}</S.PostDetail>
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
