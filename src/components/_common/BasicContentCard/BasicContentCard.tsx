import { S } from './style';
import { ReactComponent as MoreDotsIcon } from 'asset/_common/moreDots.svg';
import { ReactComponent as HeartIcon } from 'asset/_common/heart.svg';
import { ReactComponent as CommentIcon } from 'asset/_common/comment.svg';
import MoreBox from '../MoreBox/MoreBox';
import { useSetRecoilState } from 'recoil';
import { useState } from 'react';
import { useDeleteScrapMutation } from '../../../hooks/apis/scrap';
import { folderModalAtom } from '../../../atom/modal';
import { useNavigate } from 'react-router-dom';

type BasicCardProps = {
  imgUrl: string;
  scrapTitle: string;
  scrapContent: string;
  originTitle: string;
  originLink: string;
  scrapId: number;
  isMine: boolean;
  folderId: number;
  heartCount: number;
  commentCount: number;
};

const BasicContentCard = (props: BasicCardProps) => {
  const {
    isMine,
    imgUrl,
    scrapContent,
    scrapTitle,
    originTitle,
    scrapId,
    folderId,
    heartCount,
    commentCount
  } = props;
  const setFolderModal = useSetRecoilState(folderModalAtom);
  const [isMoreBoxOpen, setIsMoreBoxOpen] = useState(false);
  const { deleteScrapMutate } = useDeleteScrapMutation(folderId);
  const navigate = useNavigate();

  return (
    <S.Wrapper isBorderBottom={true}>
      {isMine && (
        <S.MoreBoxWrapper>
          <MoreBox
            isMoreBoxOpen={isMoreBoxOpen}
            closeMoreBox={() => {
              setIsMoreBoxOpen(false);
            }}
            buttons={[
              {
                name: '폴더 이동',
                onClick: () => {
                  setFolderModal((prev) => ({
                    ...prev,
                    option: 'select',
                    scrapId: scrapId,
                    open: true
                  }));
                }
              },
              {
                name: '삭제',
                onClick: () => {
                  deleteScrapMutate(scrapId);
                }
              }
            ]}
          />
        </S.MoreBoxWrapper>
      )}
      <S.PostImg
        imgUrl={imgUrl}
        onClick={() => {
          navigate(`/detail/${scrapId}`);
        }}
      />

      <S.PostContentWrapper
        onClick={() => {
          navigate(`/detail/${scrapId}`);
        }}
      >
        <S.PostTitle>{scrapTitle}</S.PostTitle>
        <S.OriginalTitle>{originTitle}</S.OriginalTitle>
        <S.PostDetail>{scrapContent}</S.PostDetail>
      </S.PostContentWrapper>

      <S.IconWrapper>
        <MoreDotsIcon
          onClick={() => {
            setIsMoreBoxOpen(true);
          }}
        />
        <S.IconFlexWrapper>
          <S.IconContainer>
            <HeartIcon />
            <S.IconText>{heartCount}</S.IconText>
          </S.IconContainer>
          <S.IconContainer>
            <CommentIcon />
            <S.IconText>{commentCount}</S.IconText>
          </S.IconContainer>
        </S.IconFlexWrapper>
      </S.IconWrapper>
    </S.Wrapper>
  );
};

export default BasicContentCard;
