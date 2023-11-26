import { S } from './style';
import CircleIcon from '../CircleBox/CircleBox';
import BasicButton from '../BasicButton/BasicButton';
import { FollowingType } from '../../../types/FollowingType';
import { useNavigate } from 'react-router-dom';
import {
  useDeleteFollowMutation,
  useGetCurrentFollowQuery,
  usePostFollowMutation
} from 'hooks/apis/follow';

type CardPropsType = {
  width: string;
} & FollowingType;

const UserCard = ({
  width,
  followingNickname,
  followingDescription,
  followingProfileImg
}: CardPropsType) => {
  const { postFollowMutate } = usePostFollowMutation(followingNickname);
  const { deleteFollowMutate } = useDeleteFollowMutation(followingNickname);

  const navigate = useNavigate();
  const currentFollow = useGetCurrentFollowQuery(followingNickname);

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

      {currentFollow ? (
        <BasicButton
          color="grey"
          fontSize={16}
          width={100}
          height={35}
          onClick={(e) => {
            e.preventDefault();
            deleteFollowMutate(followingNickname);
          }}
        >
          언팔로우
        </BasicButton>
      ) : (
        <BasicButton
          color="positive"
          fontSize={16}
          width={100}
          height={35}
          onClick={(e) => {
            e.preventDefault();
            postFollowMutate(followingNickname);
          }}
        >
          팔로우
        </BasicButton>
      )}
    </S.Wrapper>
  );
};

export default UserCard;
