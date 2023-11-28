import { flexCenter } from 'style/common';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  ${flexCenter};
  position: relative;
`;

const FlexWrapper = styled.div`
  ${flexCenter};
  width: 800px;
  gap: 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-22']};
  font-weight: 600;
  padding-bottom: 10px;
  padding-left: 10px;
`;

const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const OneMenu = styled.div<{
  highlight?: boolean;
}>`
  width: 150px;
  height: 34px;
  ${flexCenter};
  font-weight: ${({ highlight }) => (highlight ? '600' : '400')};
  padding-top: 10px;
  border-top: ${({ highlight, theme }) =>
    highlight ? `3px solid ${theme.COLOR.mint}` : `2px solid ${theme.line}`};
`;

const Name = styled.div<{
  currentIdx: number;
  index: number;
}>`
  display: inline-block;
  text-align: center;
  padding: 0px 10px;
  color: ${({ currentIdx, index, theme }) =>
    currentIdx === index
      ? `3px solid ${theme.COLOR.mint}`
      : `2px solid ${theme.line}`};
  &:hover {
    cursor: pointer;
  }
`;

const AddFolderButton = styled.div`
  width: 150px;
  height: 34px;
  ${flexCenter};
  padding-top: 10px;
  border-top: 2px solid rgba(0, 0, 0, 0);

  svg {
    width: 14px;
    height: 14px;
    path {
      fill: ${({ theme }) => theme.COLOR.darkGrey};
    }
  }
`;

const EditModalButton = styled.div`
  color: ${({ theme }) => theme.COLOR.mint};
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const S = {
  Wrapper,
  OneMenu,
  Name,
  Title,
  ListWrapper,
  FlexWrapper,
  AddFolderButton,
  EditModalButton,
  TitleWrapper
};
