import S from './style';
import { useParams } from 'react-router-dom';
import ScrapList from '../../components/FolderPage/ScrapList/ScrapList';
import { useEffect, useState } from 'react';
import { useGetFolderListQuery } from '../../hooks/apis/folder';
import { LocalStorage } from '../../utils/localStorage';
import LineNavbar from '../../components/_common/LineNavbar/LineNavbar';

const FolderPage = () => {
  const params = useParams();
  const urlNickname = params.nickname || '';
  const myNickname = LocalStorage.getNickname();
  const [isMine, setIsMine] = useState(false);
  const folderList = useGetFolderListQuery(urlNickname)!;

  useEffect(() => {
    if (LocalStorage.getNickname() == urlNickname) {
      setIsMine(true);
    }
  }, []);

  return (
    folderList && (
      <S.ListWrapper>
        <LineNavbar
          folderList={folderList}
          isMine={isMine}
          title={isMine ? '내 폴더' : `${myNickname}님의 폴더`}
        />

        <ScrapList isMine={isMine} firstFolderId={folderList[0].folderId} />
      </S.ListWrapper>
    )
  );
};

export default FolderPage;
