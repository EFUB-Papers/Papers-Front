import { flexCenter } from 'style/common';
import styled from 'styled-components';

const FolderPageWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100%;
  ${flexCenter};
`;

const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100%;
  flex-direction: column;
  ${flexCenter}
`;

const Wrapper = styled.div`
  width: 100%;
  flex-direction: column;
  ${flexCenter};
`;

const S = {
  FolderPageWrapper,
  ContentWrapper,
  Wrapper
};

export default S;
