import { omitText } from 'style/common';
import { styled } from 'styled-components';
import { flexCenter } from './../../../style/common';

const Wrapper = styled.div<{ $width: string }>`
  width: ${({ $width }) => $width};
  aspect-ratio: 1 / 1.15;
  ${flexCenter};
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 1px solid ${({ theme }) => theme.lineForDark};
  border-radius: 15px;
  padding: 15px;
  overflow: hidden;
`;

const ProfileImg = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Nickname = styled.div`
  width: 100%;
  font-size: 18px;
  margin: 12px 0px;
  text-align: center;
  ${omitText}

  &:hover {
    cursor: pointer;
  }
`;

const Introduction = styled.div`
  width: 100%;
  aspect-ratio: 8 / 2;
  font-size: 14px;
  text-align: center;
  margin-bottom: 14px;
  /* 3줄 말줄임표 */
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  color: ${({ theme }) => theme.COLOR.darkGrey};
`;

export const S = {
  Wrapper,
  ProfileImg,
  Nickname,
  Introduction
};
