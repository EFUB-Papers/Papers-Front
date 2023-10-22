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
  white-space: wrap;
`;

export const boxShadow = css`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const modalBackGround = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.65);
`;
