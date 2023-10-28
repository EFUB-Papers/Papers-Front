import { styled } from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const ContentWrapper = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const S = { Wrapper, ContentWrapper };
