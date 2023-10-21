import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0px 8px;
  width: 100vw;
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.COLOR.lightGrey};
  background: white;
  z-index: 1;
`;

const LogoWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
  margin-right: 8px;
`;

const BasicButtonWrapper = styled.div`
  margin-left: auto;
  margin-right: 8px;
`;

const BasicButtonText = styled.div`
  margin-right: 4px;
`;

const ProfileImgWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const S = {
  Wrapper,
  BasicButtonWrapper,
  BasicButtonText,
  ProfileImgWrapper,
  LogoWrapper
};
