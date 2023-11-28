import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.line};
`;

const HeartCount = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 2px;
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 10px;
  width: 100px;
  height: 30px;
`;

const HeartWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const S = {
  Wrapper,
  HeartCount,
  InfoWrapper,
  HeartWrapper
};
