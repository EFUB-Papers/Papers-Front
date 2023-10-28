import { MyFolderMock } from 'mock/userMock';
import EditOneFolder from './OneFolder';
import { S } from '../style';

const FolderEdit = () => {
  return (
    <S.ContentWrapper>
      <S.Title>폴더 편집</S.Title>
      <S.FlexBox>
        {MyFolderMock.map((folder) => {
          return <EditOneFolder id={folder.id} title={folder.title} />;
        })}
      </S.FlexBox>
    </S.ContentWrapper>
  );
};
export default FolderEdit;
