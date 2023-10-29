import { styled } from 'styled-components';
import { flexCenter } from './../../style/common';

const Root = styled.div`
  ${flexCenter}
`;

const Wrapper = styled.div`
  width: 900px;
`;

const CategoryDropdown = styled.div`
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 4px;
  width: 160px;
  height: 30px;
  padding: 0px 10px;
  margin-top: 50px;
  ${flexCenter}; /* justify-content: space-around; */
  &:hover {
    cursor: pointer;
  }
  background: ${({ theme }) => theme.background};
`;

const CategoryList = styled.div`
  position: absolute;
  width: inherit;
  top: 86px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.COLOR.lightGrey};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  &:hover {
    cursor: default;
  }
  background: inherit;
  z-index: 1;
`;

const CategoryItem = styled.div`
  margin: 4px 10px;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`;

const CategoryText = styled.div``;

const ArrowButton = styled.div`
  margin-left: auto;
`;

const Title = styled.input`
  margin: 20px 0px;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-32']};
`;

const LinkWrapper = styled.div`
  ${flexCenter}
  justify-content: start;
  margin-top: 26px;
`;

const Link = styled.input`
  margin-left: 8px;
  width: 600px;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 6px;
`;

const ImageButton = styled.label`
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const ImageText = styled.div`
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
`;

const ImgPreview = styled.img`
  width: 500px;
`;

const Content = styled.textarea`
  border-top: 1px solid ${({ theme }) => theme.line};
  margin-top: 30px;
  padding: 20px 0px;
  width: 100%;
  height: 400px;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-family: inherit;
`;

export const S = {
  Root,
  Wrapper,
  CategoryDropdown,
  CategoryList,
  CategoryItem,
  CategoryText,
  ArrowButton,
  Title,
  LinkWrapper,
  Link,
  ImageWrapper,
  ImageButton,
  ImageText,
  ImgPreview,
  Content
};
