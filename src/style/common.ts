import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const omitText = css`
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const boxShadow = css`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
