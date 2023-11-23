import React from 'react';
import { S } from './style';
import { ReactComponent as DeleteIcon } from 'asset/_common/delete.svg';
import { OneTagType } from 'types/ScrapType';
import { NewTagType } from 'types/TagType';

export type TagProps = {
  tagId: number | string;
  tagName: string;
  onDelete?: (id: string) => void; //TagCreator에서 X 클릭 시 이벤트 핸들러
};

const Tag = ({ tagId, tagName, onDelete }: TagProps) => {
  // 태그 삭제
  const onClick = () => {
    if (!!onDelete && typeof tagId === 'string') {
      onDelete(tagId);
    }
  };

  return (
    <S.Wrapper onClick={onClick}>
      {tagName}
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
