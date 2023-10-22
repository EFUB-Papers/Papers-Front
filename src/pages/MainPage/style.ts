import { styled } from 'styled-components';
import { flexCenter } from './../../style/common';

const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
`;

const Header = styled.div`
  ${flexCenter};
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 40px;
`;

const CategoryBarWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
`;

const TagList = styled.div`
  ${flexCenter}
`;

const ContentWrapper = styled.div`
  width: 700px;
`;

const Section = styled.div`
  padding: 30px 0px;
`;

const Text = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CardList = styled.div`
  ${flexCenter}
  justify-content: space-between;
`;

export const S = {
  Wrapper,
  Header,
  CategoryBarWrapper,
  TagList,
  ContentWrapper,
  Section,
  Text,
  CardList
};
