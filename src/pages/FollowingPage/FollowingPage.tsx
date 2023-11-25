import UserCard from '../../components/_common/UserCard/UserCard';
import { followingMock } from '../../mock/userMock';
import { S } from './style';
import { v4 } from 'uuid';
import { useGetFollowingQuery } from 'hooks/apis/follow';
import { FollowingType } from 'types/FollowingType';

const FollowingPage = () => {
  const data = useGetFollowingQuery();

  return (
    <S.CardList>
      {data &&
        data.map((user: FollowingType) => (
          <UserCard
            key={v4()}
            width={'300px'}
            followingNickname={user.followingNickname}
            followingDescription={''}
            followingProfileImg={user.followingProfileImg}
          />
        ))}
    </S.CardList>
  );
};
export default FollowingPage;
