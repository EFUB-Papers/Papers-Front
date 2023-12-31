import styled from 'styled-components';
import type { CircleIconType } from './CircleBox';
import { flexCenter } from '../../../style/common';

const CircleImg = styled.div<CircleIconType>`
  width: ${({ size }) =>
    size == 'big' ? 115 : size == 'medium' ? 90 : size === 'small' ? 44 : 35}px;
  height: ${({ size }) =>
    size == 'big' ? 115 : size == 'medium' ? 90 : size === 'small' ? 44 : 35}px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.input};
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  ${flexCenter};
`;

const S = {
  CircleImg
};

export default S;
