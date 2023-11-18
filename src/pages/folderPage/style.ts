import styled from 'styled-components';

const ListWrapper = styled.div<{
  isScrollAble: boolean;
}>`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
`;

const S = {
  ListWrapper,
  ContentWrapper
};

export default S;
