import React from 'react';
import { S } from './style';

export type TagProps = {
  text: string;
};

const Tag = ({ text }: TagProps) => {
  return <S.Wrapper>{text}</S.Wrapper>;
};

export default Tag;
