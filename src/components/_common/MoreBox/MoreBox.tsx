import React, { useEffect, useRef } from "react";
import { S } from "./style";

type Button = {
  name: string;
  onClick: () => void;
};

type MoreBoxProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  buttons: Button[];
};

const MoreBox = ({ isModalOpen, closeModal, buttons }: MoreBoxProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 모달 바깥 클릭시 모달 닫기
    const onClickOutside = (e: MouseEvent) => {
      if (
        isModalOpen &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [isModalOpen, closeModal]);

  console.log(isModalOpen);

  return (
    <S.ModalContainer>
      {isModalOpen && (
        <>
          <S.Modal ref={modalRef}>
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
                    closeModal();
                  }}
                  key={index}
                >
                  {button.name}
                </S.Button>
              ))}
            </S.ButtonList>
          </S.Modal>
          {/* <S.Backdrop onClick={closeModal}></S.Backdrop> */}
        </>
      )}
    </S.ModalContainer>
  );
};

export default MoreBox;
