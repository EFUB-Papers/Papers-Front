import styled from 'styled-components';
import { flexCenter, omitText } from 'style/common';

const Wrapper = styled.div<{
  isBorderBottom: boolean;
}>`
  height: 140px;
  left: 0;
  display: flex;
  width: 100%;
  padding: 20px 0px;
  box-sizing: border-box;
  border-bottom: ${({ isBorderBottom, theme }) =>
    isBorderBottom && `1px solid ${theme.line}`};
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  position: relative;
`;

const MoreBoxWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
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

const PostContentWrapper = styled.div`
  color: ${({ theme }) => theme.text};
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 14px;
  margin-right: 24px;
  overflow: hidden;
`;

const PostTitle = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: 500;
`;

const PostDetail = styled.div`
  margin-top: auto;
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

const OriginalLink = styled.div`
  width: 100%;
  display: inline-block;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  color: ${({ theme }) => theme.COLOR.darkGrey};
`;

const IconWrapper = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  height: 100%;
`;

const MoreButton = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const IconFlexWrapper = styled.div`
  flex: none;
  display: flex;
  width: 100px;
`;

const IconContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 4px;
`;

const IconText = styled.div`
  color: ${({ theme }) => theme.COLOR.darkGrey};
`;

export const S = {
  Wrapper,
  PostContentWrapper,
  PostImg,
  PostTitle,
  PostDetail,
  OriginalLink,
  IconContainer,
  IconWrapper,
  MoreButton,
  IconText,
  IconFlexWrapper,
  MoreBoxWrapper
};
