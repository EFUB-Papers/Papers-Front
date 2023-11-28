import styled from 'styled-components';
import { flexCenter } from '../../../style/common';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0px 8px;
  width: 100vw;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.line};
  background: ${({ theme }) => theme.header};
  z-index: 999;
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
  border-bottom: 1px solid ${({ theme }) => theme.line};
`;

const LogoWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }

  ${flexCenter};
  margin-right: 8px;
`;

const BasicButtonWrapper = styled.div`
  margin-left: auto;
  margin-right: 12px;
  display: flex;
  gap: 10px;
`;

const BasicButtonText = styled.div`
  margin-right: 4px;
`;

const ProfileImgWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }

  margin-right: 2px;
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
