import { S } from './style';
import CircleIcon from '../CircleBox/CircleBox';

type ProfileProps = {
  userName: string;
  userDetail: string;
  imgUrl: string;
};

const ProfileBox = ({ userName, userDetail, imgUrl }: ProfileProps) => {
  return (
    <S.ProfileWrapper>
      <CircleIcon size="big" imgurl={imgUrl} />
      <S.UserText>
        <S.UserName>{userName}</S.UserName>
        <S.UserDetail>{userDetail}</S.UserDetail>
      </S.UserText>
    </S.ProfileWrapper>
  );
};
export default ProfileBox;
