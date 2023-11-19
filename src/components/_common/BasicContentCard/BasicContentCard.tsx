import { S } from './style';
import { ReactComponent as MoreDotsIcon } from 'asset/_common/moreDots.svg';
import { ReactComponent as HeartIcon } from 'asset/_common/heart.svg';
import { ReactComponent as CommentIcon } from 'asset/_common/comment.svg';
import MoreBox from '../MoreBox/MoreBox';
import { folderSelectModal } from '../../../atom/modal';
import { useSetRecoilState } from 'recoil';
import { useState } from 'react';

type BasicCardProps = {
  imgUrl: string;
  scrapTitle: string;
  scrapContent: string;
  originTitle: string;
  originLink: string;
  scrapId: number;
};

const BasicContentCard = (props: BasicCardProps) => {
  const { imgUrl, scrapContent, scrapTitle, originTitle, scrapId } = props;
  const setEditModalOpen = useSetRecoilState(folderSelectModal);
  const [isMoreBoxOpen, setIsMoreBoxOpen] = useState(false);

  return (
    <S.Wrapper
      isBorderBottom={true}
      onClick={() => {
        console.log(scrapId);
      }}
    >
      <S.MoreBoxWrapper>
        <MoreBox
          isModalOpen={isMoreBoxOpen}
          closeModal={() => {
            setIsMoreBoxOpen(false);
          }}
          buttons={[
            {
              name: '폴더 이동',
              onClick: () => {
                setEditModalOpen(true);
              }
            },
            {
              name: '삭제',
              onClick: () => {}
            }
          ]}
        />
      </S.MoreBoxWrapper>
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
