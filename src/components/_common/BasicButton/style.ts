import styled from 'styled-components';
import { flexCenter } from 'style/common';
import type { BasicButtonProps } from './BasicButton'; //비활성화시 색상

//비활성화시 색상
const ButtonWrapper = styled.button<BasicButtonProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme, color }) =>
    color === 'positive' ? theme.COLOR.mint : theme.COLOR.darkGrey};
  color: white;
  border-radius: ${({ width }) => width / 2}px;
  font-size: ${({ fontSize }) => fontSize}px;
  ${flexCenter}
`;

const S = {
  ButtonWrapper
};

export default S;
