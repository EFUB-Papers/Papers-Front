import { useEffect, useState } from 'react';
import { S } from './style';
import { useGetScrapDetailQuery } from 'hooks/apis/scrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteScrapMutation } from './../../hooks/apis/scrap';
import { NewTagType } from 'types/TagType';
import { useSetRecoilState } from 'recoil';
import { folderModalAtom } from '../../atom/modal';
import { v4 } from 'uuid';
import TagCreator from '../../components/_common/TagCreator/TagCreator';
import CircleBox from '../../components/_common/CircleBox/CircleBox';
import { timeHelper } from '../../utils/timeHelper';
import MoreBox from '../../components/_common/MoreBox/MoreBox';
import Comment from '../../components/DetailPage/Comment/Comment';
import HeartAndCmtInfo from '../../components/DetailPage/HeartAndCmtInfo/HeartAndCmtInfo';
import LinkPreview from '../../components/_common/LinkPreview/LinkPreview';
import { ReactComponent as MoreDots } from 'asset/_common/moreDots.svg';

export type PrevScrapType = {
  scrapId: number;
  scrapTitle: string;
  scrapLink: string;
  scrapContent: string;
  categoryName: string;
  imgUrl: string | null;
  tags: NewTagType[];
};

const DetailPage = () => {
  const [isMoreBoxOpen, setIsMoreBoxOpen] = useState(false);
  const setFolderModalState = useSetRecoilState(folderModalAtom);
  const params = useParams();
  const navigate = useNavigate();

  const data = useGetScrapDetailQuery(Number(params.scrapId))!;
  const { deleteScrapMutate } = useDeleteScrapMutation();

  const openMoreBox = () => setIsMoreBoxOpen(true);
  const closeMoreBox = () => setIsMoreBoxOpen(false);

  const onEdit = () => {
    const prevScrap: PrevScrapType = {
      // folderId: data?.folderId,
      scrapId: data?.scrapId,
      scrapTitle: data?.scrapTitle,
      scrapLink: data?.link,
      scrapContent: data?.scrapContent,
      categoryName: data?.categoryName,
      imgUrl: data?.imgUrl || null,
      // folderId: data?.folderId,
      tags: data?.tags.map((tag: { tagName: string }): NewTagType => {
        return { tagId: v4(), tagName: tag.tagName };
      })
    };
    navigate('/scrap-edit', { state: prevScrap });
  };

  //폴더 모달의 기본 폴더 값을 바꿔주기
  useEffect(() => {
    setFolderModalState((prev) => ({ ...prev, folderId: data?.folderId }));
  }, []);

  const onDelete = () => {
    deleteScrapMutate(data.scrapId);
    navigate(-1);
  };

  return (
    <S.Wrapper>
      <S.FlexWrapper>
        <S.Category>{data?.categoryName}</S.Category>
        {/*<RightArrow />*/}
      </S.FlexWrapper>
      <S.Title>{data?.scrapTitle}</S.Title>
      <TagCreator
        isCreator={false}
        newTagList={data?.tags.map((tag) => {
          return { tagName: tag.tagName };
        })}
      />
      <S.UserInfoWrapper>
        <CircleBox imgUrl={data?.imgUrl} size={'small'} />
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
        {data?.imgUrl ? (
          <S.ImgWrapper src={data?.imgUrl} />
        ) : (
          <S.ImgWrapper src={'asset/_common/Profile.jpg'} />
        )}
        <S.ContentWrapper>{data?.scrapContent}</S.ContentWrapper>
      </S.PostWrapper>
      <HeartAndCmtInfo
        scrapId={data?.scrapId}
        liked={data?.liked}
        heartCount={data?.likeCount}
        commentCount={data?.commentCount}
      />
      <Comment scrapId={data?.scrapId} />
    </S.Wrapper>
  );
};
export default DetailPage;
