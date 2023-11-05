import { styled } from 'styled-components';
import { flexCenter } from './../../style/common';

const Root = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;

  /* 스크롤 숨기기 */
  textarea {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }

  textarea,
  input {
    color: inherit;
    background: inherit;
    font-family: inherit;
  }
`;

const Wrapper = styled.div`
  min-width: 300px;
  max-width: 900px;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const CategoryDropdown = styled.div`
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 4px;
  width: 160px;
  height: 30px;
  padding: 0px 10px;
  margin-top: 50px;
  ${flexCenter};
  &:hover {
    cursor: pointer;
  }
  background: ${({ theme }) => theme.background};
`;

const CategoryList = styled.div`
  position: absolute;
  width: inherit;
  transform: translateY(calc(50% + 20px));
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

const Title = styled.textarea`
  margin: 30px 0px;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-34']};
  width: 100%;
`;

const LinkWrapper = styled.div`
  width: 100%;
  ${flexCenter}
  justify-content: start;
  align-items: start;
  margin-top: 26px;
`;

const LinkColumnWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 8px;
`;

const Link = styled.input`
  flex: 1;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 10px;
  color: ${({ theme }) => theme.COLOR.lightGrey};
`;

const ImageButton = styled.label`
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const ImageText = styled.input`
  width: 200px;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
`;

const ImagePreview = styled.img`
  width: 500px;
`;

const Content = styled.textarea`
  border-top: 1px solid ${({ theme }) => theme.line};
  margin-top: 30px;
  padding: 20px 0px;
  width: 100%;
  min-height: 500px;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`;

const ExitButton = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLOR.darkGrey};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
  margin-right: 20px;
  svg > path {
    stroke: ${({ theme }) => theme.COLOR.darkGrey};
  }
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
  LinkColumnWrapper,
  Link,
  ImageWrapper,
  ImageButton,
  ImageText,
  ImagePreview,
  Content,
  Footer,
  ExitButton
};
