import styled from 'styled-components';
import { flexCenter } from '../../style/common';

const Wrapper = styled.div`
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 800px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    cursor: pointer;
  }

  svg {
    width: 6px;
    margin-top: 2px;
  }
`;

const Category = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.COLOR.darkGrey};
`;

const PostWrapper = styled.div`
  width: 100%;
  ${flexCenter};
  flex-direction: column;
  margin-top: 50px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin: 20px 0px;
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

const MoreDotsWrappr = styled.div`
  margin-left: auto;
  &:hover {
    cursor: pointer;
  }
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
  margin-top: 50px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 100px;
  margin-top: 50px;
  margin-bottom: 40px;
  line-height: 1.6;
`;

export const S = {
  Wrapper,
  Title,
  Category,
  Name,
  PrePostWrapper,
  PostWrapper,
  FlexColumnWrapper,
  MoreDotsWrappr,
  ImgWrapper,
  DateInfo,
  UserInfoWrapper,
  CategoryWrapper,
  ContentWrapper
};
