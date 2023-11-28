import React from 'react';
import BasicButton from '../BasicButton/BasicButton';
import { S } from './style';

type ConfirmProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  text: string;
  onCancel: () => void;
  onConfirm: () => void;
};

const ConfirmModal = (props: ConfirmProps) => {
  const { isModalOpen, closeModal, text, onCancel, onConfirm } = props;
  return (
    <S.ConfirmContainer>
      {isModalOpen && (
        // 모달 외부 배경
        <S.Backdrop onClick={closeModal}>
          {/* 모달 */}
          <S.Modal
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              // 이벤트 버블링 막기
              e.stopPropagation()
            }
          >
            {/* 안내 문구 */}
            <S.Text>{text}</S.Text>
            <S.ButtonWrapper>
              {/* 취소 버튼 */}
              <BasicButton
                color={'grey'}
                fontSize={16}
                width={90}
                height={30}
                onClick={() => {
                  onCancel();
                  closeModal();
                }}
              >
                취소
              </BasicButton>
              {/* 확인 버튼 */}
              <BasicButton
                color={'positive'}
                fontSize={16}
                width={90}
                height={30}
                onClick={() => {
                  onConfirm();
                  closeModal();
                }}
              >
                확인
              </BasicButton>
            </S.ButtonWrapper>
          </S.Modal>
        </S.Backdrop>
      )}
    </S.ConfirmContainer>
  );
};

export default ConfirmModal;
