import { ReactElement } from 'react';
import { S } from './style';
import { ReactComponent as DeleteIconBlack } from 'asset/_common/deleteIcon.svg';
import { ReactComponent as DeleteIconWhite } from 'asset/_common/deleteIconWhite.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modeState } from '../../../atom/mode';
import { folderEditModal } from '../../../atom/modal';

type ModalPropType = {
  width: number;
  height: number;
  children: ReactElement;
  onCloseModal: () => void;
};

const BasicModal = (props: ModalPropType) => {
  const { width, height, children } = props;
  const mode = useRecoilValue(modeState);

  const [isModalOpen, setIsModalOpen] = useRecoilState(folderEditModal);

  const onClickCloseModal = () => {
    setIsModalOpen(false); // 모달을 닫는 함수를 호출하여 상태 변경
  };

  return (
    <S.Wrapper>
      <S.Form width={width} height={height}>
        <S.ModalCloseIcon>
          {mode == 'dark' ? (
            <DeleteIconWhite onClick={onClickCloseModal} />
          ) : (
            <DeleteIconBlack onClick={onClickCloseModal} />
          )}
        </S.ModalCloseIcon>
        {children}
      </S.Form>
    </S.Wrapper>
  );
};

export default BasicModal;
