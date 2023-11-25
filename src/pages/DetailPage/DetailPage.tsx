import { useEffect, useState } from 'react';
import CircleBox from 'components/_common/CircleBox/CircleBox';
import { S } from './style';
import { ReactComponent as RightArrow } from 'asset/arrow/rightArrow.svg';
import HeartAndCmtInfo from 'components/DetailPage/HeartAndCmtInfo/HeartAndCmtInfo';
import Comment from 'components/DetailPage/Comment/Comment';
import LinkPreview from '../../components/_common/LinkPreview/LinkPreview';
import TagCreator from 'components/_common/TagCreator/TagCreator';
import { useGetScrapDetailQuery } from 'hooks/apis/scrap';
import { useNavigate, useParams } from 'react-router-dom';
import { OneTagType } from 'types/ScrapType';
import { ReactComponent as MoreDots } from 'asset/_common/moreDots.svg';
import MoreBox from 'components/_common/MoreBox/MoreBox';
import { useDeleteScrapMutation } from './../../hooks/apis/scrap';
import { v4 } from 'uuid';
import { NewTagType } from 'types/TagType';
import { CATEGORY } from '../../constants/Category';
import { timeHelper } from '../../utils/timeHelper';
import { useSetRecoilState } from 'recoil';
import { folderModalAtom } from '../../atom/modal';

export type PrevScrapType = {
  scrapId: number;
  scrapTitle: string;
  scrapLink: string;
  scrapContent: string;
  category: string;
  folderId: number;
  imgUrl: string;
  tags: NewTagType[];
};

const DetailPage = () => {
  const [isMoreBoxOpen, setIsMoreBoxOpen] = useState(false);
  const setFolderModalState = useSetRecoilState(folderModalAtom);
  const params = useParams();
  const navigate = useNavigate();

  const data = useGetScrapDetailQuery(Number(params.scrapId));
  const { deleteScrapMutate } = useDeleteScrapMutation();

  const openMoreBox = () => setIsMoreBoxOpen(true);
  const closeMoreBox = () => setIsMoreBoxOpen(false);

  const onEdit = () => {
    const prevScrap: PrevScrapType = {
      scrapId: data?.scrapId,
      scrapTitle: data?.scrapTitle,
      scrapLink: data?.link,
      scrapContent: data?.scrapContent,
      category: data?.categoryName,
      imgUrl: data?.imgUrl,
      folderId: data?.folerId,
      tags: data?.tags.map((tag: { tagName: string }): NewTagType => {
        return { tagId: v4(), tagName: tag.tagName };
      })
    };
    navigate('/scrap-edit', { state: prevScrap });
  };

  //폴더 모달의 기본 폴더 값을 바꿔주기
  useEffect(() => {
    setFolderModalState((prev) => ({ ...prev, folderId: data.folderId }));
  }, []);

  const onDelete = () => {
    deleteScrapMutate(data.scrapId);
    navigate(-1);
  };

  return (
    <S.Wrapper>
      <S.FlexWrapper>
        <S.Category>{CATEGORY[data.categoryName]}</S.Category>
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
          <S.DateInfo>{timeHelper(data?.createdAt)}</S.DateInfo>
        </S.FlexColumnWrapper>
        <S.MoreDotsWrappr>
          <MoreDots onClick={openMoreBox} />
        </S.MoreDotsWrappr>
        <MoreBox
          isMoreBoxOpen={isMoreBoxOpen}
          closeMoreBox={closeMoreBox}
          buttons={[
            {
              name: '삭제하기',
              onClick: onDelete
            },
            {
              name: '편집하기',
              onClick: onEdit
            }
          ]}
        />
      </S.UserInfoWrapper>
      <S.PostWrapper>
        <LinkPreview size={'big'} url={data?.link} />
        <S.ImgWrapper src={data?.imgUrl} />
        <S.ContentWrapper>{data?.scrapContent}</S.ContentWrapper>
      </S.PostWrapper>
      <HeartAndCmtInfo
        scrapId={data?.scrapId}
        liked={data?.liked}
        heartCount={data?.heartCount}
        commentCount={data?.commentCount}
      />
      <Comment />
    </S.Wrapper>
  );
};
export default DetailPage;
