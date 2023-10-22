import styled from 'styled-components';
import { flexCenter } from 'style/common';

const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  margin-top: 50px;
`;

const Category = styled.div`
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-32']};
  font-weight: 700;
`;
const ContentWrapper = styled.div`
  margin-top: 30px;
  width: 900px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const S = {
  Wrapper,
  Category,
  ContentWrapper
};
