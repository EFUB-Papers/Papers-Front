import { S } from './style';
import CircleIcon from '../CircleBox/CircleBox';
import BasicButton from '../BasicButton/BasicButton';
import { FollowingType } from '../../../types/FollowingType';
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
  followNickname,
  followDescription,
  followProfileImg
}: CardPropsType) => {
  const { postFollowMutate } = usePostFollowMutation();
  const { deleteFollowMutate } = useDeleteFollowMutation();
  const currentFollow = useGetCurrentFollowQuery(followNickname);

  return (
    <S.Wrapper $width={width}>
      <CircleIcon imgUrl={followProfileImg} size="medium" />
      <S.Nickname>{followNickname}</S.Nickname>
      <S.Introduction>{followDescription}</S.Introduction>

      {currentFollow ? (
        <BasicButton
          color="grey"
          fontSize={16}
          width={100}
          height={35}
          onClick={(e) => {
            e.preventDefault();
            deleteFollowMutate(followNickname);
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
            postFollowMutate(followNickname);
          }}
        >
          팔로우
        </BasicButton>
      )}
    </S.Wrapper>
  );
};

export default UserCard;
