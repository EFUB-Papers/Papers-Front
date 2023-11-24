import { OnePostMock } from 'mock/postMock';
import CircleBox from 'components/_common/CircleBox/CircleBox';
import { S } from './style';
import { ReactComponent as RightArrow } from 'asset/arrow/rightArrow.svg';
import HeartAndCmtInfo from 'components/DetailPage/HeartAndCmtInfo/HeartAndCmtInfo';
import Comment from 'components/DetailPage/Comment/Comment';
import LinkPreview from '../../components/_common/LinkPreview/LinkPreview';
import TagCreator from 'components/_common/TagCreator/TagCreator';

const DetailPage = () => {
  const {
    scrapTitle,
    scrapContent,
    writerNickname,
    writerProfile,
    imgUrl,
    tags
  } = OnePostMock;

  return (
    <S.Wrapper>
      <S.FlexWrapper>
        <S.Category>여행</S.Category>
        <RightArrow />
      </S.FlexWrapper>
      <S.Title>{scrapTitle}</S.Title>
      <TagCreator isCreator={false} tags={tags} />
      <S.UserInfoWrapper>
        <CircleBox imgUrl={writerProfile} size={'small'} />
        <S.FlexColumnWrapper>
          <S.Name>{writerNickname}</S.Name>
          <S.DateInfo>7일전</S.DateInfo>
        </S.FlexColumnWrapper>
      </S.UserInfoWrapper>
      <S.PostWrapper>
        <LinkPreview
          size={'big'}
          url="https://despiteallthat.tistory.com/243"
        />
        <S.ImgWrapper src={imgUrl} />
        <S.ContentWrapper>{scrapContent}</S.ContentWrapper>
      </S.PostWrapper>
      <HeartAndCmtInfo heartCount={12} commentCount={12} />
      <Comment />
    </S.Wrapper>
  );
};
export default DetailPage;
