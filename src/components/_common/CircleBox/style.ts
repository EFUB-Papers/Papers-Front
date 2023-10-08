import styled from 'styled-components';
import { CircleIconType } from '.';

const CircleImg = styled.div<CircleIconType>`
  width: ${({ size }) => (size == 'big' ? 120 : size == 'medium' ? 90 : 44)}px;
  height: ${({ size }) => (size == 'big' ? 120 : size == 'medium' ? 90 : 44)}px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLOR.backgroundGrey};
  background-image: url(imgurl);
`;

const S = {
  CircleImg
};

export default S;
