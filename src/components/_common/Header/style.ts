import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 8px;
  width: 100vw;
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.COLOR.lightGrey};
`;

const TitleWrapper = styled.div`
  margin-right: 8px;
`;

const BasicButtonWrapper = styled.div`
  margin-left: auto;
  margin-right: 8px;
`;

const BasicButtonText = styled.div`
  margin-right: 4px;
`;

export const S = { Wrapper, BasicButtonWrapper, TitleWrapper, BasicButtonText };
