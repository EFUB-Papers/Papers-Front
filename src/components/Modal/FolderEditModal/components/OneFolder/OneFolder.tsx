import styled from 'styled-components';
import { ReactComponent as FolderIcon } from 'asset/_common/folderIcon.svg';
import { ReactComponent as PencilIcon } from 'asset/_common/greyPencil.svg';
import { ReactComponent as DeleteIcon } from 'asset/_common/trashIcon.svg';

const OneFolder = ({ id, title }: { id: number; title: string }) => {
  return (
    <S.Wrapper>
      <S.IconContainer>
        <FolderIcon />
        {title}
      </S.IconContainer>
      <S.IconContainer>
        <PencilIcon />
        <DeleteIcon />
      </S.IconContainer>
    </S.Wrapper>
  );
};
export default OneFolder;

const Wrapper = styled.div`
  width: 360px;
  height: 43px;
  border-bottom: 1px solid ${({ theme }) => theme.COLOR.lineGrey};
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const S = {
  Wrapper,
  IconContainer
};
