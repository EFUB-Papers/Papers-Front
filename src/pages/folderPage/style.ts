import styled from 'styled-components';

const ListWrapper = styled.div<{
  isScrollAble: boolean;
}>`
  height: 100px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const S = {
  ListWrapper,
  ContentWrapper
};

export default S;
