import styled from 'styled-components';
import { modalBackGround } from '../../style/common';

const Wrapper = styled.div<{ isScrollAble: boolean }>``;

const ModalWrapper = styled.div`
  ${modalBackGround};
  width: 100%;
  height: 100vh;
  z-index: 100000;
`;

export const S = {
  Wrapper,
  ModalWrapper
};
