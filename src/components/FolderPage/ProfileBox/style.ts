import styled from 'styled-components';
import { flexCenter } from 'style/common';

const ProfileWrapper = styled.div`
  margin-top: 5rem;
  width: 187px;
  height: 300px;
  flex-direction: column;
  position: relative;
  color: ${({ theme }) => theme.text};
`;

const UserInfo = styled.div`
  margin-top: 20px;
  gap: 10px;
  ${flexCenter};
  flex-direction: column;
`;

const UserNameBox = styled.div`
  ${flexCenter};
  gap: 10px;
  flex-direction: column;
`;

const UserName = styled.div`
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-22']};
  font-weight: 700;
  padding-bottom: 10px;
`;

const UserDetail = styled.div`
  color: ${({ theme }) => theme.COLOR.darkGrey};
  line-height: 1.5;
  width: 200px;
  text-align: center;
`;

const FlexWrapper = styled.div`
  ${flexCenter};
`;

const FlexWrapperColumn = styled.div`
  ${flexCenter};
  margin-top: 30px;
  flex-direction: column;
`;

const Title = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  padding-left: 10px;
  height: 40px;
  font-weight: 600;
`;

const UserProfile = styled.div`
  width: 100%;
  ${flexCenter};
`;

const Label = styled.span`
  font-size: 12px;
`;

const Message = styled.div<{ isError: boolean }>`
  color: ${({ theme, isError }) =>
    isError ? theme.COLOR.error : theme.COLOR.mint};
  font-size: 14px;
  height: 10px;
`;

export const S = {
  ProfileWrapper,
  UserNameBox,
  UserInfo,
  UserName,
  UserDetail,
  FlexWrapper,
  UserProfile,
  Title,
  Message,
  Label,
  FlexWrapperColumn
};
