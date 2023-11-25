import React, { useEffect, useRef } from 'react';
import { S } from './style';
import { modeState } from '../../../atom/mode';
import { useRecoilValue } from 'recoil';

type Button = {
  name: string;
  onClick: () => void;
};

type MoreBoxProps = {
  isMoreBoxOpen: boolean;
  closeMoreBox: () => void;
  buttons: Button[];
};

const MoreBox = ({ isMoreBoxOpen, closeMoreBox, buttons }: MoreBoxProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const mode = useRecoilValue(modeState);

  useEffect(() => {
    // 모달 바깥 클릭시 모달 닫기
    const onClickOutside = (e: MouseEvent) => {
      if (
        isMoreBoxOpen &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        closeMoreBox();
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [isMoreBoxOpen, closeMoreBox]);

  return (
    <S.ModalContainer>
      {isMoreBoxOpen && (
        <>
          <S.Modal mode={mode} ref={modalRef}>
            <S.ButtonList
              onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                // 이벤트 버블링 막기
                e.stopPropagation()
              }
            >
              {buttons.map((button: Button, index: number) => (
                <S.Button
                  onClick={() => {
                    button.onClick();
                    closeMoreBox();
                  }}
                  key={index}
                >
                  {button.name}
                </S.Button>
              ))}
            </S.ButtonList>
          </S.Modal>
          {/* <S.Backdrop onClick={closeMoreBox}></S.Backdrop> */}
        </>
      )}
    </S.ModalContainer>
  );
};

export default MoreBox;
