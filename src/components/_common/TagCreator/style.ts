import styled from 'styled-components';
import { flexCenter } from 'style/common';

const Wrapper = styled.div`
  ${flexCenter};
  height: 32px;
`;

const Input = styled.input`
  padding: 0px 10px;
`;

export const S = { Wrapper, Input };
