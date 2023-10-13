import { ReactComponent as FolderIcon } from 'asset/navBar/folder.svg';
import { ReactComponent as FollowingIcon } from 'asset/navBar/following.svg';
import { ReactComponent as HeartIcon } from 'asset/navBar/heart.svg';
import { ReactComponent as LogoutIcon } from 'asset/navBar/logout.svg';
import { M } from './style';
const MyMenu = () => {
  return (
    <>
      <M.MenuWrapper>
        <M.MenuIcon>
          <FolderIcon />
        </M.MenuIcon>

        <M.MenuText>내 폴더</M.MenuText>

        <M.MenuIcon>
          <FollowingIcon />
        </M.MenuIcon>

        <M.MenuText>좋아요한 스크랩</M.MenuText>

        <M.MenuIcon>
          <HeartIcon />
        </M.MenuIcon>

        <M.MenuText>팔로잉 목록</M.MenuText>

        <M.MenuIcon>
          <LogoutIcon />
        </M.MenuIcon>

        <M.MenuText>로그아웃</M.MenuText>
      </M.MenuWrapper>
    </>
  );
};

export default MyMenu;
