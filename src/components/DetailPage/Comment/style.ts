import styled from 'styled-components';
import { flexCenter } from '../../../style/common';

const NewCommentWrapper = styled.div`
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 1px solid ${({ theme }) => theme.lineForDark};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  padding: 18px;
  margin-top: 10px;
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

const NameBox = styled.div`
  font-size: 16px;
`;

const TextAreaBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const OneCommentBox = styled.div`
  width: 100%;
  /* border-bottom: 1px solid ${({ theme }) => theme.line}; */
`;

const CommentContextBox = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-left: 15px;
`;

const SubComment = styled.div`
  display: inline-block;
  margin: 15px;
  color: ${({ theme }) => theme.COLOR.darkGrey};
  &:hover {
    cursor: pointer;
  }
`;

const SubCommentWrapper = styled.div`
  margin-left: 20px;
  padding: 10px;
  border-left: 3px solid ${({ theme }) => theme.line};
`;

const ReplyNewContainer = styled.div`
  width: 100%;
  padding: 10px;
  padding-bottom: 0px;
`;

const ReplyContainer = styled.div`
  margin-bottom: 30px;
`;

export const S = {
  Wrapper,
  NameBox,
  FlexBox,
  TextAreaBox,
  MyInfoBox,
  OneCommentWrapper,
  OneCommentBox,
  CommentContextBox,
  SubComment,
  SubCommentWrapper,
  ListWrapper,
  UserInfoBox,
  NewCommentWrapper
};

export const R = { ReplyNewContainer, ReplyContainer };
