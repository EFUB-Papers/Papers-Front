import { Link } from 'react-router-dom';
import { flexCenter, omitText } from 'style/common';
import { styled } from 'styled-components';

const Wrapper = styled.div<{ $width: number }>`
  width: ${({ $width }) => $width + 'px'};
  display: flex;
  flex-direction: column;
`;

const LinkBox = styled(Link)`
  width: 100%;
  aspect-ratio: 10 / 3;
  border-radius: 15px;
  padding: 10px 15px;
  font-size: 17px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  color: ${({ theme }) => theme.text};

  ${flexCenter}
  &:hover {
    cursor: pointer;
  }

  overflow: hidden;
  color: black;
`;

const LinkTitle = styled.div`
  object-fit: cover;
  display: block;
  width: 100%;
  color: ${({ theme }) => theme.text};

  /* 2줄 말줄임표 */
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const ScrapBox = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1.15;
  border-radius: 15px;
  padding: 15px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
  }

  overflow: hidden;
`;

const ImageBox = styled.div`
  width: 100%;
  aspect-ratio: 5 / 3;
  ${flexCenter}
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
`;

const Title = styled.div`
  font-size: 18px;
  margin-top: 8px;
  ${omitText}
`;

const Content = styled.div`
  font-size: 14px;
  margin-top: 6px;
  /* 3줄 말줄임표 */
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  ${omitText}
`;

const HeartCnt = styled.div`
  margin: 0px 4px;
`;

const Author = styled.div`
  margin-left: auto;
  color: ${({ theme }) => theme.COLOR.darkGrey};
`;

export const S = {
  Wrapper,
  LinkBox,
  ScrapBox,
  ImageBox,
  Img,
  Title,
  Content,
  Footer,
  HeartCnt,
  Author,
  LinkTitle
};
