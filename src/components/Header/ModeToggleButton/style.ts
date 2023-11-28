import styled from 'styled-components';
import { flexCenter } from '../../../style/common';

const Wrapper = styled.div<{
  mode: string;
}>`
  width: 65px;
  height: 35px;
  border-radius: 50px;
  background-color: ${({ mode }) =>
    mode == 'dark' ? '#888' : '\n' + '#bbe7f0'};
  position: relative;
`;

const Circle = styled.div<{
  mode: string;
}>`
  position: absolute;
  left: ${({ mode }) => (mode == 'dark' ? 33 : 5)}px;
  height: 27px;
  width: 27px;
  border-radius: 50%;
  margin-top: 4px;
  background-color: white;
  transition: left 0.3s ease-in-out;
  ${flexCenter};
`;
export const S = {
  Wrapper,
  Circle
};
