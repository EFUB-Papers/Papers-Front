import styled from 'styled-components';
import { flexCenter } from 'style/common';

const ProfileWrapper = styled.div`
  margin-top: 7rem;
  width: 187px;
  height: 300px;
  flex-direction: column;
  position: relative;
  color: ${({ theme }) => theme.text};
`;

const UserInfo = styled.div`
  position: absolute;
  bottom: 0;
  gap: 10px;
  ${flexCenter};
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

const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexWrapper = styled.div`
  ${flexCenter};
`;
const UserProfile = styled.div`
  position: absolute;
  width: 100%;
  ${flexCenter};
  top: 20px;
`;

const Label = styled.span`
  font-size: 12px;
`;
export const S = {
  ProfileWrapper,
  UserInfo,
  UserName,
  UserDetail,
  FlexWrapper,
  UserProfile,
  Label,
  FlexColumnWrapper
};
