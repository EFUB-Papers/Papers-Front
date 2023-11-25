import { S } from './style';
import { ReactComponent as MoreDotsIcon } from 'asset/_common/moreDots.svg';
import { ReactComponent as HeartIcon } from 'asset/_common/heart.svg';
import { ReactComponent as CommentIcon } from 'asset/_common/comment.svg';
import MoreBox from '../MoreBox/MoreBox';
import { useSetRecoilState } from 'recoil';
import { useState } from 'react';
import { useDeleteScrapMutation } from '../../../hooks/apis/scrap';
import { folderModalAtom } from '../../../atom/modal';

type BasicCardProps = {
  imgUrl: string;
  scrapTitle: string;
  scrapContent: string;
  originTitle: string;
  originLink: string;
  scrapId: number;
  isMine: boolean;
  folderId: number;
};

const BasicContentCard = (props: BasicCardProps) => {
  const {
    isMine,
    imgUrl,
    scrapContent,
    scrapTitle,
    originTitle,
    scrapId,
    folderId
  } = props;
  const setFolderModal = useSetRecoilState(folderModalAtom);
  const [isMoreBoxOpen, setIsMoreBoxOpen] = useState(false);
  const { deleteScrapMutate } = useDeleteScrapMutation(folderId);

  return (
    <S.Wrapper
      isBorderBottom={true}
      onClick={() => {
        console.log(scrapId);
      }}
    >
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
                  setFolderModal({
                    option: 'select',
                    scrapId: scrapId,
                    open: true,
                    folderId: -1
                  });
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

      <S.PostImg imgUrl={imgUrl} />

      <S.PostContentWrapper>
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
            <S.IconText>23</S.IconText>
          </S.IconContainer>
          <S.IconContainer>
            <CommentIcon />
            <S.IconText>11</S.IconText>
          </S.IconContainer>
        </S.IconFlexWrapper>
      </S.IconWrapper>
    </S.Wrapper>
  );
};

export default BasicContentCard;
