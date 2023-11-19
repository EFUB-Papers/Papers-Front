import { styled } from 'styled-components';
import { omitText } from 'style/common';

const ModalContainer = styled.div``;

const Modal = styled.div<{ mode: 'light' | 'dark' }>`
  position: absolute;
  display: inline-block;
  background: ${({ theme }) => theme.background};
  border-radius: 7px;
  padding: 4px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 1px solid
    ${({ theme, mode }) => (mode === 'light' ? theme.COLOR.lightGrey : null)};
  z-index: 2;
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  & + & {
    border-top: 1px solid ${({ theme }) => theme.COLOR.lightGrey};
  }

  color: ${({ theme }) => theme.text};
  padding: 4px;
  ${omitText}
`;

export const S = { ModalContainer, Modal, ButtonList, Button };
