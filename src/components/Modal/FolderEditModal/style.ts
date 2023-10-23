import styled from 'styled-components';

const Title = styled.div`
  width: 90%;
  position: fixed;
  top: 20px;
  background-color: ${({ theme }) => theme.background};
  height: 50px;
  display: flex;
  align-items: center;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

const ContentWrapper = styled.div`
  overflow: scroll;
  width: 400px;
  height: 460px;
  position: relative;
`;

export const S = {
  ContentWrapper,
  Title,
  FlexBox
};
