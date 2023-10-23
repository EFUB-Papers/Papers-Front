import styled from 'styled-components';
import { omitText } from 'style/common';

const Wrapper = styled.div<{
  isBorderBottom: boolean;
}>`
  width: 900px;
  height: 120px;
  left: 0;
  display: flex;
  position: relative;
  padding-bottom: 5px;
  border-bottom: ${({ isBorderBottom, theme }) =>
    isBorderBottom && `1px solid ${theme.COLOR.lineGrey}`};
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
`;

const PostContentWrapper = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  gap: 10px;
  position: relative;
  margin-top: 5px;
`;

const PostImg = styled.div<{
  imgUrl: string;
}>`
  background-image: url(${({ imgUrl }) => imgUrl});
  height: 100px;
  width: 200px;
  background-size: cover;
`;

const PostTitle = styled.div`
  color: black;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: 500;
`;

const PostDetail = styled.div`
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  ${omitText}

  height: 34px;
`;

const OriginalTitle = styled.div`
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  color: ${({ theme }) => theme.COLOR.darkGrey};
`;

const IconWrapper = styled.div`
  display: flex;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const IconText = styled.div`
  color: ${({ theme }) => theme.COLOR.darkGrey};
`;

const IconFlexWrapper = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  right: 0;
  bottom: 20px;
`;
export const S = {
  Wrapper,
  PostContentWrapper,
  PostImg,
  PostTitle,
  PostDetail,
  OriginalTitle,
  IconContainer,
  IconWrapper,
  IconText,
  IconFlexWrapper
};
