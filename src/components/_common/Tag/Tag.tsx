import React from 'react';
import { S } from './style';
import { ReactComponent as DeleteIcon } from 'asset/_common/delete.svg';
import { TagType } from 'types/TagType';

export type TagProps = {
  tag: TagType;
  onDelete?: (id: string) => void; //TagCreator에서 X 클릭 시 이벤트 핸들러
};

const Tag = ({ tag, onDelete }: TagProps) => {
  return (
    <S.Wrapper onClick={() => !!onDelete && onDelete(tag.id as string)}>
      {tag.content}
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
