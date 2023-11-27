import { flexCenter } from 'style/common';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  margin-top: 100px;
  width: 100%;
  position: relative;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
`;
export const S = {
  Wrapper,
  Title
};
