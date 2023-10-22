import { flexCenter } from 'style/common';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 900px;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const FlexWrapper = styled.div`
  ${flexCenter}
  overflow: 'hidden',
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-22']};
  font-weight: 600;
  padding-bottom: 10px;
  padding-left: 10px;
`;

const ListWrapper = styled.div`
  display: flex;
  width: 900px;
  overflow: hidden;
`;

const OneMenu = styled.div<{
  currentIdx: number;
  index: number;
  onClick: (index: number) => void;
}>`
  width: 150px;
  height: 100%;
  font-weight: ${({ currentIdx, index }) =>
    currentIdx === index ? '600' : '400'};
  padding-top: 10px;
  border-top: ${({ currentIdx, index, theme }) =>
    currentIdx === index
      ? `3px solid ${theme.COLOR.mint}`
      : `2px solid ${theme.COLOR.lineGrey}`};
`;

const Name = styled.div<{
  currentIdx: number;
  index: number;
}>`
  text-align: center;
  padding-top: 10px;
  color: ${({ currentIdx, index, theme }) =>
    currentIdx === index
      ? `3px solid ${theme.COLOR.mint}`
      : `2px solid ${theme.COLOR.lineGrey}`};
`;

export const S = {
  Wrapper,
  OneMenu,
  Name,
  Title,
  ListWrapper,
  FlexWrapper
};
