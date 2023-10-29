import styled from 'styled-components';
import { flexCenter } from 'style/common';

const Wrapper = styled.div`
  ${flexCenter};
  justify-content: start;
  transform: translateX(-6px);
  height: 32px;
`;

const Input = styled.input`
  padding: 0px 6px;
`;

export const S = { Wrapper, Input };
