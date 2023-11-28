import styled from 'styled-components';

const Wrapper = styled.div`
  flex-direction: column;
  margin-top: 50px;
  min-height: 100vh;
`;

const Category = styled.div`
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-32']};
  font-weight: 700;
`;
const ContentWrapper = styled.div`
  margin-top: 50px;
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 100px;
  justify-content: center;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

const FlexBoxColumn = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const NoContent = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;
export const S = {
  Wrapper,
  Category,
  ContentWrapper,
  FlexBox,
  NoContent,
  FlexBoxColumn
};
