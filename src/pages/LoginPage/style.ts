import { flexCenter } from 'style/common';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const LogoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 144px;
  height: 60px;
  padding: 0px 8px;
  ${flexCenter};
  justify-content: start;
  &:hover {
    cursor: pointer;
  }
`;

const MainWrapper = styled.div`
  ${flexCenter};
  flex-direction: column;
  height: 100vh;
  padding: 0% 6%;
  scroll-snap-align: start;
`;

const RowWrapper = styled.div`
  flex: 1;
  ${flexCenter};
  width: 100vw;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 5%;
`;

const ButtonWrapper = styled.div`
  margin-top: 50px;
`;

const Button = styled.div<{ $color?: string }>`
  background: ${({ $color, theme }) => $color === 'mint' && theme.COLOR.mint};
  margin-top: 20px;
  width: 200px;
  height: 44px;
  ${flexCenter};
  color: white;
  font-weight: bold;
  border-radius: 6px;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.2);
  &:hover {
    cursor: pointer;
  }
`;

const Section = styled.div<{ $rows: number; $padding?: string }>`
  background: #e5f6f5;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(rows, 1fr);
  align-items: center;
  padding: ${({ $padding }) => $padding} 0px;
  scroll-snap-align: start;
`;

const Image = styled.img<{
  $width: number;
  $marginRight?: number;
  $justifySelf?: string;
}>`
  width: ${({ $width }) => $width + 'px'};
  margin-right: ${({ $marginRight }) => $marginRight + 'px'};
  justify-self: ${({ $justifySelf }) => $justifySelf};
`;

const ScrollMoreWrapper = styled.div`
  ${flexCenter};
  margin-bottom: 40px;
`;

export const S = {
  Wrapper,
  LogoWrapper,
  MainWrapper,
  RowWrapper,
  ContentWrapper,
  ButtonWrapper,
  Button,
  Image,
  Section,
  ScrollMoreWrapper
};
