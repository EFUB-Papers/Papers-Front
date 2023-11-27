import { S } from './style';
import CircleIcon from '../CircleBox/CircleBox';
import { FollowingType } from '../../../types/FollowingType';
import { useNavigate } from 'react-router-dom';
import FollowButton from '../FollowButton/FollowButton';
import BasicButton from '../BasicButton/BasicButton';

type CardPropsType = {
  width: string;
} & FollowingType;

const UserCard = ({
  width,
  followingNickname,
  followingDescription,
  followingProfileImg
}: CardPropsType) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper $width={width}>
      <S.ProfileImg>
        <CircleIcon
          onClick={() => navigate(`/folder/${followingNickname}`)}
          imgUrl={followingProfileImg}
          size="medium"
        />
      </S.ProfileImg>
      <S.Nickname onClick={() => navigate(`/folder/${followingNickname}`)}>
        {followingNickname}
      </S.Nickname>
      <S.Introduction>{followingDescription}</S.Introduction>
      <S.ButtonContainer>
        {/* <BasicButton
          color={'transparent'}
          fontSize={17}
          width={130}
          height={10}
          textColor={'#4491e3'}
          onClick={() => navigate(`/folder/${followingNickname}`)}
        >
          스크랩 구경 하기
        </BasicButton> */}
        <FollowButton nickname={followingNickname} />
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default UserCard;
