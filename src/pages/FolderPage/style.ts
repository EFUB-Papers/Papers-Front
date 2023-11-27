import styled from 'styled-components';

const FolderPageWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 850px;
`;

const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const S = {
  FolderPageWrapper,
  ContentWrapper
};

export default S;
