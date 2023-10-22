import React from 'react';
import { S } from './style';
import { ReactComponent as DeleteIcon } from 'asset/_common/delete.svg';

export type TagProps = {
  text: string;
  onDelete?: () => void; //TagCreator에서 x 클릭 시 이벤트 핸들러
};

const Tag = ({ text, onDelete }: TagProps) => {
  return (
    <S.Wrapper onDelete={onDelete}>
      {text}
      {onDelete && (
        // X 버튼
        <S.DeleteButton onClick={onDelete}>
          <DeleteIcon />
        </S.DeleteButton>
      )}
    </S.Wrapper>
  );
};

export default Tag;
