import { styled } from 'styled-components';
import { flexCenter } from '../../style/common';

const Wrapper = styled.div`
  ${flexCenter};
  flex-direction: column;
  margin-top: 100px;
  width: 65%;
`;

const CardList = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
  ${flexCenter};
  margin-top: 4rem;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

export const S = {
  Wrapper,
  CardList,
  Title
};
