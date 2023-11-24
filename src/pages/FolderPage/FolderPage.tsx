import S from './style';
import { useParams } from 'react-router-dom';
import { OneFolderType } from '../../types/FolderType';
import { folderMock } from '../../mock/userMock';
import ScrapList from '../../components/FolderPage/ScrapList/ScrapList';
import LineNavbar from '../../components/_common/LineNavbar/LineNavbar';
import { useEffect, useState } from 'react';
import { LocalStorage } from '../../utils/localStorage';

const FolderPage = () => {
  const params = useParams();
  const nickname = params.nickname || '';
  const [isMine, setIsMine] = useState(false);

  useEffect(() => {
    if (LocalStorage.getNickname() == nickname) {
      setIsMine(true);
    }
  }, []);

  const folderList: OneFolderType[] = folderMock;

  return (
    <S.ListWrapper>
      {folderList && (
        <LineNavbar
          folderList={folderList}
          isMine={isMine}
          title={isMine ? '내 폴더' : `${nickname}님의 폴더`}
        />
      )}

      <ScrapList isMine={isMine} />
    </S.ListWrapper>
  );
};

export default FolderPage;
