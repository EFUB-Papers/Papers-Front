import { styled } from 'styled-components';
import { flexCenter, boxShadow } from 'style/common';

const ConfirmContainer = styled.div``;

const Modal = styled.div`
  width: 400px;
  height: 130px;
  background: white;
  ${boxShadow}
  ${flexCenter}
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
`;

const Backdrop = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 1;
  ${flexCenter}
`;

const Text = styled.div`
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  ${flexCenter};
  justify-content: space-between;
  width: 220px;
`;

export const S = {
  ConfirmContainer,
  Modal,
  Backdrop,
  Text,
  ButtonWrapper
};
