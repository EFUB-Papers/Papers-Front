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
        <LinkPreview
          url={
            'https://velog.io/@kyleryu/10%EC%82%B4-%EA%BC%AC%EB%A7%88-%EA%B0%9C%EB%B0%9C%EC%9E%90-%ED%8C%90%EA%B5%90-%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85-%EB%8C%80%ED%91%9C%EA%B0%80-%EB%90%98%EB%8B%A4'
          }
        />
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
