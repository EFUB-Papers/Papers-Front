import styled from 'styled-components';
import { flexCenter, omitText } from 'style/common';

const Wrapper = styled.div<{
  isBorderBottom: boolean;
}>`
  height: 140px;
  left: 0;
  display: flex;
  width: 850px;
  ${flexCenter};
  padding: 20px 0px;
  box-sizing: border-box;
  border-bottom: ${({ isBorderBottom, theme }) =>
    isBorderBottom && `1px solid ${theme.line}`};
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};

  //@media (max-width: 800px) {
  //  width: 400px;
  //}
`;

const PostContentWrapper = styled.div`
  color: ${({ theme }) => theme.text};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 0px 14px;
`;

const PostImg = styled.div<{
  imgUrl: string;
}>`
  flex: none;
  background-image: url(${({ imgUrl }) => imgUrl});
  height: 100%;
  width: 180px;
  background-size: cover;
`;

const PostTitle = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: 500;
`;

const PostDetail = styled.div`
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  ${omitText};
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
`;

const OriginalTitle = styled.div`
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  color: ${({ theme }) => theme.COLOR.darkGrey};
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  height: 100%;
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
  flex: none;
  display: flex;
  gap: 20px;
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
