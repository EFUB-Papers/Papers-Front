import BasicModal from '../BasicModal/BasicModal';
import OneFolder from './components/OneFolder/OneFolder';
import { S } from './style';
import { MyFolderMock } from 'mock/userMock';
import { useRecoilState } from 'recoil';
import { folderEditModal } from '../../../atom/modal';

const FolderEditModal = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(folderEditModal);
  return (
    <BasicModal
      width={450}
      height={500}
      onCloseModal={() => setIsModalOpen(false)}
    >
      <S.ContentWrapper>
        <S.Title>이동할 폴더 선택</S.Title>
        <S.FlexBox>
          {MyFolderMock.map((folder) => {
            return <OneFolder id={folder.id} title={folder.title} />;
          })}
        </S.FlexBox>
      </S.ContentWrapper>
    </BasicModal>
  );
};
export default FolderEditModal;
