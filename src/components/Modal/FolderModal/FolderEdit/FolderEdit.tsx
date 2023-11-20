import EditOneFolder from './OneFolder';
import { S } from '../style';
import { OneFolderType } from '../../../../types/FolderType';

const FolderEdit = ({ folderList }: { folderList: OneFolderType[] }) => {
  return (
    <S.ContentWrapper>
      <S.FlexBox>
        {folderList.map((folder) => {
          return (
            <EditOneFolder id={folder.folderId} title={folder.folderName} />
          );
        })}
      </S.FlexBox>
    </S.ContentWrapper>
  );
};
export default FolderEdit;
