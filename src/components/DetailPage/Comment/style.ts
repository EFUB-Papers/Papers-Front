import styled from 'styled-components';
import { flexCenter } from '../../../style/common';

const NewCommentWrapper = styled.div`
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  height: 180px;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  margin-top: 20px;
`;

const OneCommentWrapper = styled.div`
  gap: 10px;
  display: flex;
`;

const MyInfoBox = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const UserInfoBox = styled.div<{ isSub: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: ${({ isSub }) => (isSub ? 10 : 0)}px;
`;

const FlexBox = styled.div`
  ${flexCenter};
  gap: 10px;
`;

const ContentBox = styled.div`
  width: 100%;
`;
const NameBox = styled.div`
  font-size: 16px;
`;

const TextAreaBox = styled.div`
  width: calc(100% - 10px);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`;

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const S = {
  Wrapper,
  NameBox,
  FlexBox,
  TextAreaBox,
  ContentBox,
  MyInfoBox,
  OneCommentWrapper,
  ListWrapper,
  UserInfoBox,
  NewCommentWrapper
};
