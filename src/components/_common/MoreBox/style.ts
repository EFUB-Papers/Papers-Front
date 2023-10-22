import { styled } from 'styled-components';
import { boxShadow, omitText } from './../../../style/common';

const ModalContainer = styled.div``;

const Modal = styled.div`
  position: absolute;
  display: inline-block;
  background: white;
  border-radius: 7px;
  padding: 4px;
  ${boxShadow}
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
