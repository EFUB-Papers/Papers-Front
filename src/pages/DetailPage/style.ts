import styled from 'styled-components';
import { flexCenter } from '../../style/common';

const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 800px;
`;

const FlexWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Category = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.COLOR.darkGrey};
`;

const PostWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.line};
  width: 100%;
  ${flexCenter};
  flex-direction: column;
  margin-top: 50px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
`;

const TagWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  height: 50px;
  background-color: pink;
`;

const UserInfoWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.line};
`;

const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div``;

const DateInfo = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.COLOR.lightGrey};
`;

const PrePostWrapper = styled.div`
  width: 100%;
  height: 150px;
  background-color: skyblue;
`;

const ImgWrapper = styled.img`
  width: 600px;
  height: 300px;
  margin-top: 50px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 100px;
  margin-top: 50px;
  line-height: 1.6;
`;

export const S = {
  Wrapper,
  Title,
  TagWrapper,
  Category,
  Name,
  PrePostWrapper,
  PostWrapper,
  FlexColumnWrapper,
  ImgWrapper,
  DateInfo,
  UserInfoWrapper,
  FlexWrapper,
  ContentWrapper
};
