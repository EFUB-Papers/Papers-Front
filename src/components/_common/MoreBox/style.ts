import { styled } from 'styled-components';
import { omitText } from './../../../style/common';

const ModalContainer = styled.div``;

const Modal = styled.div`
  position: absolute;
  display: inline-block;
  background: ${({ theme }) => theme.background};
  border-radius: 7px;
  padding: 4px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  z-index: 2;
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  & + & {
    border-top: 1px solid ${({ theme }) => theme.COLOR.lightGrey};
  }

  padding: 4px;
  ${omitText}
`;

export const S = { ModalContainer, Modal, ButtonList, Button };
