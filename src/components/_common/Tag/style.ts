import styled from 'styled-components';
import { flexCenter } from 'style/common';
import { TagProps } from './Tag';

const Wrapper = styled.div`
  ${flexCenter}
  height: 32px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  padding: 6px 12px;
  margin: 6px 6px;
  border-radius: 30px;
  background: ${({ theme }) => theme.COLOR.mint};

  &:hover {
    cursor: pointer;
  }
`;

const DeleteButton = styled.button`
  margin-left: 6px;
`;

export const S = { Wrapper, DeleteButton };
