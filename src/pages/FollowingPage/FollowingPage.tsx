import UserCard from '../../components/_common/UserCard/UserCard';
import { followingMock } from '../../mock/userMock';
import { S } from './style';
import { v4 } from 'uuid';

const FollowingPage = () => {
  // const data = useGetFollowingQuery();
  return (
    <S.CardList>
      {followingMock.map((user) => {
        const { followNickname, followDescription, followProfileImg } = user;
        return (
          <UserCard
            key={v4()}
            width={'300px'}
            followNickname={followNickname}
            followDescription={followDescription}
            followProfileImg={followProfileImg}
          />
        );
      })}
    </S.CardList>
  );
};
export default FollowingPage;
