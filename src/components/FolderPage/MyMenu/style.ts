import styled from 'styled-components';

const MenuWrapper = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  grid-template-rows: 40px 40px 40px 40px;
  gap: 2rem;
  margin-left: 1rem;
  margin-top: 6rem;
`;

const MenuIcon = styled.div``;

const OneMenuWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const MenuText = styled.div`
  font-size: 18px;
  padding-top: 5px;
`;

export const M = {
  MenuWrapper,
  MenuText,
  OneMenuWrapper,
  MenuIcon
};
