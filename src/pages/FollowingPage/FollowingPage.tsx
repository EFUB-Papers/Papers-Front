import UserCard from '../../components/_common/UserCard/UserCard';
import { S } from './style';
import { v4 } from 'uuid';
import { useGetFollowingQuery } from 'hooks/apis/follow';
import { FollowingType } from 'types/FollowingType';

const FollowingPage = () => {
  const data = useGetFollowingQuery();

  return (
    <S.Wrapper>
      <S.Title>팔로잉 목록</S.Title>
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
    </S.Wrapper>
  );
};
export default FollowingPage;
