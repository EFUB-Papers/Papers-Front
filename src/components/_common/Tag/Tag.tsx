import React from 'react';
import { S } from './style';
import { ReactComponent as DeleteIcon } from 'asset/_common/delete.svg';
import { OneTagType } from 'types/ScrapType';

export type TagProps = {
  tag: OneTagType;
  onDelete?: (id: string) => void; //TagCreator에서 X 클릭 시 이벤트 핸들러
};

const Tag = ({ tag, onDelete }: TagProps) => {
  return (
    <S.Wrapper onClick={() => !!onDelete && onDelete(tag.tagId)}>
      {tag.tagName}
      {!!onDelete && (
        // X 버튼
        <S.DeleteButton>
          <DeleteIcon />
        </S.DeleteButton>
      )}
    </S.Wrapper>
  );
};

export default Tag;
