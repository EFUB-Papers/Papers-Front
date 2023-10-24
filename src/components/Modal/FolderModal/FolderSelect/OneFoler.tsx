import { ReactComponent as FolderIcon } from 'asset/_common/folderIcon.svg';
import { O } from '../style';
import { ReactComponent as SelectIcon } from 'asset/_common/select.svg';
import { ReactComponent as UnselectIcon } from 'asset/_common/unselect.svg';

const SelectOneFolder = ({
  title,
  onClick,
  selected
}: {
  title: string;
  onClick: () => void;
  selected: boolean;
}) => {
  return (
    <O.Wrapper onClick={onClick}>
      <O.IconContainer selected={selected}>
        <FolderIcon />
        <p>{title}</p>
      </O.IconContainer>
      <O.IconContainer>
        <O.ButtonWrapper>
          {selected ? <SelectIcon /> : <UnselectIcon />}
        </O.ButtonWrapper>
      </O.IconContainer>
    </O.Wrapper>
  );
};
export default SelectOneFolder;
