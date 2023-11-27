import { ReactComponent as FolderIcon } from 'asset/navBar/folder.svg';
import { ReactComponent as FollowingIcon } from 'asset/navBar/following.svg';
import { ReactComponent as HeartIcon } from 'asset/navBar/heart.svg';
import { ReactComponent as LogoutIcon } from 'asset/navBar/logout.svg';
import { ReactComponent as FolderIconWhite } from 'asset/navBar/folderWhite.svg';
import { ReactComponent as FollowingIconWhite } from 'asset/navBar/followingWhite.svg';
import { ReactComponent as HeartIconWhite } from 'asset/navBar/heartWhite.svg';
import { ReactComponent as LogoutIconWhite } from 'asset/navBar/logoutWhite.svg';
import { M } from './style';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { modeState } from '../../../atom/mode';
import { LocalStorage } from 'utils/localStorage';

const MyMenu = () => {
  const nickname = LocalStorage.getNickname();
  const navigate = useNavigate();
  const mode = useRecoilValue(modeState);

  const onClickLogout = () => {
    localStorage.removeItem('papersToken');
    localStorage.removeItem('nickname');
    window.location.href = '/main';
  };

  return (
    <>
      <M.MenuWrapper>
        <M.OneMenuWrapper onClick={() => navigate(`/folder/${nickname}`)}>
          <M.MenuIcon>
            {mode == 'light' ? <FolderIcon /> : <FolderIconWhite />}
          </M.MenuIcon>
          <M.MenuText>내 폴더</M.MenuText>
        </M.OneMenuWrapper>

        <M.OneMenuWrapper onClick={() => navigate(`/like/${nickname}`)}>
          <M.MenuIcon>
            {mode == 'light' ? <FollowingIcon /> : <FollowingIconWhite />}
          </M.MenuIcon>
          <M.MenuText>좋아요한 스크랩</M.MenuText>
        </M.OneMenuWrapper>

        <M.OneMenuWrapper onClick={() => navigate(`/following/${nickname}`)}>
          <M.MenuIcon>
            {mode == 'light' ? <HeartIcon /> : <HeartIconWhite />}
          </M.MenuIcon>
          <M.MenuText>팔로잉 목록</M.MenuText>
        </M.OneMenuWrapper>

        <M.OneMenuWrapper>
          <M.MenuIcon>
            {mode == 'light' ? <LogoutIcon /> : <LogoutIconWhite />}
          </M.MenuIcon>
          <M.MenuText onClick={onClickLogout}>로그아웃</M.MenuText>
        </M.OneMenuWrapper>
      </M.MenuWrapper>
    </>
  );
};

export default MyMenu;
