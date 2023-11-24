import { OnePostMock } from 'mock/postMock';
import CircleBox from 'components/_common/CircleBox/CircleBox';
import { S } from './style';
import { ReactComponent as RightArrow } from 'asset/arrow/rightArrow.svg';
import HeartAndCmtInfo from 'components/DetailPage/HeartAndCmtInfo/HeartAndCmtInfo';
import Comment from 'components/DetailPage/Comment/Comment';
import LinkPreview from '../../components/_common/LinkPreview/LinkPreview';
import TagCreator from 'components/_common/TagCreator/TagCreator';
import { useGetScrapDetailQuery } from 'hooks/apis/scrap';
import { useParams } from 'react-router-dom';
import { OneTagType } from 'types/ScrapType';

const DetailPage = () => {
  const {
    scrapTitle,
    scrapContent,
    writerNickname,
    writerProfile,
    imgUrl,
    tags
  } = OnePostMock;

  const params = useParams();
  const data = useGetScrapDetailQuery(Number(params.scrapId));

  return (
    <S.Wrapper>
      <S.FlexWrapper>
        <S.Category>여행</S.Category>
        <RightArrow />
      </S.FlexWrapper>
      <S.Title>{data?.scrapTitle}</S.Title>
      <TagCreator
        isCreator={false}
        newTagList={data?.tags.map((tag: OneTagType) => {
          return { tagName: tag.tagName };
        })}
      />
      <S.UserInfoWrapper>
        <CircleBox imgUrl={data?.writerProfile} size={'small'} />
        <S.FlexColumnWrapper>
          <S.Name>{data?.writerNickname}</S.Name>
          <S.DateInfo>{data?.createdAt}</S.DateInfo>
        </S.FlexColumnWrapper>
      </S.UserInfoWrapper>
      <S.PostWrapper>
        <LinkPreview size={'big'} url={data?.link} />
        <S.ImgWrapper src={data?.imgUrl} />
        <S.ContentWrapper>{data?.scrapContent}</S.ContentWrapper>
      </S.PostWrapper>
      <HeartAndCmtInfo
        heartCount={data?.heartCount}
        commentCount={data?.commentCount}
      />
      <Comment />
    </S.Wrapper>
  );
};
export default DetailPage;
