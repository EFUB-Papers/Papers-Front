import styled from 'styled-components';

const MenuWrapper = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  grid-template-rows: 40px 40px 40px 40px;
  gap: 2rem;
  margin-left: 1rem;
  /* margin-top: 5em; */
`;

const MenuIcon = styled.div``;

const OneMenuWrapper = styled.div`
  display: flex;
  gap: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const MenuText = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-top: 5px;
`;

export const M = {
  MenuWrapper,
  MenuText,
  OneMenuWrapper,
  MenuIcon
};
