import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 140px;
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 1px solid ${({ theme }) => theme.lineForDark};
  padding: 10px;
  margin: 10px 0px;

  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  height: 100%;
`;

const ColumnWrapper = styled.div`
  flex: 1;
  justify-content: space-between;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  padding: 6px;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
`;

const Content = styled.div`
  height: 50px;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};

  /* 두줄 말줄임표 */
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
`;

const Source = styled.div`
  color: ${({ theme }) => theme.COLOR.darkGrey};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-12']};
`;

const SmallWrapper = styled.div`
  width: 100%;
  height: 40px;
  color: ${({ theme }) => theme.text};

  &:hover {
    cursor: pointer;
  }
`;

const SmallImg = styled.img`
  width: 40px;
  height: 40px;
`;

const SmallTitle = styled.div`
  width: 100%;
  height: 30px;
`;

const SmallFlex = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SmallColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const SmallSource = styled.div`
  color: ${({ theme }) => theme.COLOR.darkGrey};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-12']};
`;

const FailText = styled.div`
  color: ${({ theme }) => theme.COLOR.error};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-12']};
}`;

const SmallContent = styled.div`
  height: 40px;
  overflow: hidden;
  color: ${({ theme }) => theme.COLOR.darkGrey};
`;

export const S = {
  Wrapper,
  Image,
  ColumnWrapper,
  Title,
  Content,
  Source,
  FailText
};

export const XS = {
  SmallWrapper,
  SmallImg,
  SmallTitle,
  SmallColumn,
  SmallFlex,
  SmallSource,
  SmallContent
};
