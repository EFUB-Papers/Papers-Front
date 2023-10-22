import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0px 8px;
  width: 100vw;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.COLOR.lineGrey};
  background: rgba(256, 256, 256, 0.7);
  z-index: 10;
`;

const DWrapper = styled.div`
  z-index: 100;
  width: 100vw;
  height: 60px;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  background: rgba(256, 256, 256, 0.8);
  position: fixed;
  border-bottom: 1px solid ${({ theme }) => theme.COLOR.lineGrey};
`;

const LogoWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
  margin-right: 8px;
`;

const BasicButtonWrapper = styled.div`
  margin-left: auto;
  margin-right: 12px;
`;

const BasicButtonText = styled.div`
  margin-right: 4px;
`;

const ProfileImgWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
  margin-right: 2cqmin;
`;
export const D = {
  DWrapper
};

export const S = {
  Wrapper,
  BasicButtonWrapper,
  BasicButtonText,
  ProfileImgWrapper,
  LogoWrapper
};
