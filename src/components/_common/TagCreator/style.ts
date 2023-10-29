import styled from 'styled-components';
import { flexCenter } from 'style/common';

const Wrapper = styled.div`
  width: 100%;
  ${flexCenter};
  justify-content: start;
  transform: translateX(-6px);
  flex-wrap: wrap;
`;

const InputWrapper = styled.span`
  padding: 6px 0px;
  margin: 6px 6px;
  height: 32px;
  position: relative;
`;

const InputWidth = styled.span`
  visibility: hidden;
  padding: 0 1rem;
`;

const Input = styled.input<{ $empty: boolean }>`
  color: inherit;
  background: inherit;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  position: absolute;
  width: 100%;
  min-width: ${({ $empty }) => $empty && '140px'};
  left: 0;
`;

export const S = { Wrapper, InputWrapper, InputWidth, Input };
