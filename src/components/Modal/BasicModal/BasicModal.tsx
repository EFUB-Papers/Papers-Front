import { ReactElement } from 'react';
import { S } from './style';
import { ReactComponent as DeleteIcon } from 'asset/_common/deleteIcon.svg';

type ModalPropType = {
  width: number;
  height: number;
  children: ReactElement;
};

const BasicModal = (props: ModalPropType) => {
  const { width, height, children } = props;

  return (
    <S.Wrapper>
      <S.Form width={width} height={height}>
        {children}
      </S.Form>
    </S.Wrapper>
  );
};

export default BasicModal;
