import { styled } from 'styled-components';
import { flexCenter } from '../../style/common';

const CardList = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
  ${flexCenter};
  margin-top: 8rem;
`;

export const S = {
  CardList
};
