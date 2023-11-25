import { ReactComponent as FolderIcon } from 'asset/navBar/folder.svg';
import { ReactComponent as FollowingIcon } from 'asset/navBar/following.svg';
import { ReactComponent as HeartIcon } from 'asset/navBar/heart.svg';
import { ReactComponent as LogoutIcon } from 'asset/navBar/logout.svg';
import { M } from './style';
import { useNavigate } from 'react-router-dom';

const MyMenu = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.removeItem('papersToken');
    localStorage.removeItem('nickname');
    window.location.href = '/main';
  };

  return (
    <>
      <M.MenuWrapper>
        <M.OneMenuWrapper onClick={() => navigate(`/folder/%{nickname}`)}>
          <M.MenuIcon>
            <FolderIcon />
          </M.MenuIcon>
          <M.MenuText>내 폴더</M.MenuText>
        </M.OneMenuWrapper>

        <M.OneMenuWrapper onClick={() => navigate('/like')}>
          <M.MenuIcon>
            <FollowingIcon />
          </M.MenuIcon>
          <M.MenuText>좋아요한 스크랩</M.MenuText>
        </M.OneMenuWrapper>

        <M.OneMenuWrapper onClick={() => navigate('/following')}>
          <M.MenuIcon>
            <HeartIcon />
          </M.MenuIcon>
          <M.MenuText>팔로잉 목록</M.MenuText>
        </M.OneMenuWrapper>

        <M.OneMenuWrapper>
          <M.MenuIcon>
            <LogoutIcon />
          </M.MenuIcon>
          <M.MenuText onClick={onClickLogout}>로그아웃</M.MenuText>
        </M.OneMenuWrapper>
      </M.MenuWrapper>
    </>
  );
};

export default MyMenu;
