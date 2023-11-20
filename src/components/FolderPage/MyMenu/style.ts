import { flexCenter } from 'style/common';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  width: 180px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-areas: 'icon1 text1' 'icon2 text2' 'icon3 text3' 'icon4 text4';
  grid-template-rows: 40px 40px 40px 40px;
  gap: 2rem;
  margin-left: 1rem;
  margin-top: 4rem;
`;

const MenuIcon = styled.div`
  ${flexCenter}
`;

const OneMenuWrapper = styled.div`
  ${flexCenter}
`;

const MenuText = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-left: -10px;
`;

export const M = {
  MenuWrapper,
  MenuText,
  OneMenuWrapper,
  MenuIcon
};
