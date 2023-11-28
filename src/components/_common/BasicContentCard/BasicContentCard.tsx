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
  originalLink: string;
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
    originalLink,
    scrapId,
    heartCount,
    commentCount
  } = props;

  const setFolderModal = useSetRecoilState(folderModalAtom);
  const [isMoreBoxOpen, setIsMoreBoxOpen] = useState(false);
  const { deleteScrapMutate } = useDeleteScrapMutation();
  const navigate = useNavigate();

  return (
    <S.Wrapper isBorderBottom={true}>
      {/* 점 세개 버튼 클릭시 나타나는 모달 */}
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
      {/* 이미지 */}
      <S.PostImg
        imgUrl={imgUrl}
        onClick={() => {
          navigate(`/detail/${scrapId}`);
        }}
      />
      {/* 텍스트 */}
      <S.PostContentWrapper
        onClick={() => {
          navigate(`/detail/${scrapId}`);
        }}
      >
        <S.PostTitle>{scrapTitle}</S.PostTitle>
        <S.OriginalLink>{originalLink}</S.OriginalLink>
        <S.PostDetail>{scrapContent}</S.PostDetail>
      </S.PostContentWrapper>
      {/* 아이콘 */}
      <S.IconWrapper>
        {/* 점 세개 버튼 */}
        <S.MoreButton>
          <MoreDotsIcon
            onClick={() => {
              setIsMoreBoxOpen(true);
            }}
          />
        </S.MoreButton>
        <S.IconFlexWrapper>
          {/* 좋아요 */}
          <S.IconContainer>
            <HeartIcon />
            <S.IconText>{heartCount}</S.IconText>
          </S.IconContainer>
          {/* 댓글 */}
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
