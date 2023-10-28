import styled from 'styled-components';

const Wrapper = styled.div`
  width: 70px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.line};
`;

const HeartCount = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const S = {
  Wrapper,
  HeartCount,
  InfoWrapper
};
