import styled from 'styled-components';

const Wrapper = styled.div`
  height: 32px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  padding: 6px 12px;
  border-radius: 30px;
  background: ${({ theme }) => theme.COLOR.mint};
`;

export const S = { Wrapper };
