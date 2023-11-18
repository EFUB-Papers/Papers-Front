import { OnePostMock } from 'mock/postMock';
import CircleBox from 'components/_common/CircleBox/CircleBox';
import { S } from './style';
import { ReactComponent as RightArrow } from 'asset/arrow/rightArrow.svg';
import HeartAndCmtInfo from 'components/DetailPage/HeartAndCmtInfo/HeartAndCmtInfo';
import Comment from 'components/DetailPage/Comment/Comment';
import LinkPreview from '../../components/_common/LinkPreview/LinkPreview';

const DetailPage = () => {
  const { scrapId, scrapTitle, scrapContent, scrapLink, writerInfo } =
    OnePostMock;
  return (
    <S.Wrapper>
      <S.FlexWrapper>
        <S.Category>여행</S.Category>
        <RightArrow />
      </S.FlexWrapper>
      <S.Title>{scrapTitle}</S.Title>
      <S.TagWrapper></S.TagWrapper>
      <S.UserInfoWrapper>
        <CircleBox imgUrl={writerInfo.imgUrl} size={'small'} />
        <S.FlexColumnWrapper>
          <S.Name>{writerInfo.nickname}</S.Name>
          <S.DateInfo>7일전</S.DateInfo>
        </S.FlexColumnWrapper>
      </S.UserInfoWrapper>
      <S.PostWrapper>
        <LinkPreview url={scrapLink} />
        <S.PrePostWrapper></S.PrePostWrapper>
        <S.ImgWrapper />
        <S.ContentWrapper>{scrapContent}</S.ContentWrapper>
      </S.PostWrapper>
      <HeartAndCmtInfo heartCount={12} commentCount={12} />
      <Comment />
    </S.Wrapper>
  );
};
export default DetailPage;
