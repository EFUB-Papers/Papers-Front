import styled from 'styled-components';
import { flexCenter } from 'style/common';

const ProfileWrapper = styled.div`
  margin-top: 6rem;
  width: 187px;
  height: 240px;
  color: black;
  ${flexCenter}
  flex-direction: column;
  padding-top: 1.8rem;
`;

const UserText = styled.div`
  margin-top: 1.5rem;
  ${flexCenter}
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
  text-align: center;
`;

export const S = {
  ProfileWrapper,
  UserText,
  UserName,
  UserDetail
};
