import { modalBackGround } from 'style/common';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${modalBackGround};
  z-index: 1000;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

const Form = styled.form<{
  width: number;
  height: number;
}>`
  border: 1px solid ${({ theme }) => theme.line};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.background};
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

const ModalCloseIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
  &:hover {
    cursor: pointer;
  }
`;

export const S = {
  Wrapper,
  Form,
  ModalCloseIcon
};
