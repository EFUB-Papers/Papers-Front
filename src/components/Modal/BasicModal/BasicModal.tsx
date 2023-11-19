import { ReactElement } from 'react';
import { S } from './style';
import { ReactComponent as DeleteIconBlack } from 'asset/_common/deleteIcon.svg';
import { ReactComponent as DeleteIconWhite } from 'asset/_common/deleteIconWhite.svg';
import { useRecoilValue } from 'recoil';
import { modeState } from '../../../atom/mode';

type ModalPropType = {
  width: number;
  height: number;
  children: ReactElement;
  onCloseModal: () => void;
};

const BasicModal = (props: ModalPropType) => {
  const { width, height, children } = props;
  const mode = useRecoilValue(modeState);

  return (
    <S.Wrapper>
      <S.Form width={width} height={height}>
        <S.ModalCloseIcon>
          {mode == 'dark' ? (
            <DeleteIconWhite onClick={props.onCloseModal} />
          ) : (
            <DeleteIconBlack onClick={props.onCloseModal} />
          )}
        </S.ModalCloseIcon>
        {children}
      </S.Form>
    </S.Wrapper>
  );
};

export default BasicModal;
