import { OnePostMock } from 'mock/postMock';
import CircleBox from 'components/_common/CircleBox/CircleBox';
import { S } from './style';
import { ReactComponent as RightArrow } from 'asset/arrow/rightArrow.svg';
import HeartAndCmtInfo from 'components/DetailPage/HeartAndCmtInfo/HeartAndCmtInfo';
import Comment from '../../components/DetailPage/Comment/Comment';

const DetailPage = () => {
  const { postId, postDetail, postTitle, originPost, writerInfo } = OnePostMock;
  return (
    <S.Wrapper>
      <S.FlexWrapper>
        <S.Category>여행</S.Category>
        <RightArrow />
      </S.FlexWrapper>
      <S.Title>{postTitle}</S.Title>
      <S.TagWrapper></S.TagWrapper>
      <S.UserInfoWrapper>
        <CircleBox imgUrl={writerInfo.imgUrl} size={'small'} />
        <S.FlexColumnWrapper>
          <S.Name>{writerInfo.userName}</S.Name>
          <S.DateInfo>7일전</S.DateInfo>
        </S.FlexColumnWrapper>
      </S.UserInfoWrapper>
      <S.PostWrapper>
        <S.PrePostWrapper></S.PrePostWrapper>
        <S.ImgWrapper />
        <S.ContentWrapper>{postDetail}</S.ContentWrapper>
      </S.PostWrapper>
      <HeartAndCmtInfo heartCount={12} commentCount={12} />
      <Comment />
    </S.Wrapper>
  );
};
export default DetailPage;
