import React, { useState } from 'react';
import { TagType } from 'types/TagType';
import Tag from '../Tag/Tag';
import { S } from './style';
import { v4 as uuidv4 } from 'uuid';

const TagCreator = () => {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState<TagType[]>([]);

  //태그 추가 (엔터 입력 시)
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newTag: TagType = {
        id: uuidv4(),
        content: input
      };
      setTags((currTags) => [...currTags, newTag]);
      setInput('');
    }
  };

  //태그 삭제 (X 버튼 클릭 시)
  const onDelete = (id: string) => {
    setTags((currTags) => currTags.filter((tag) => tag.id !== id));
  };

  return (
    <S.Wrapper>
      {/* 태그 리스트 */}
      {tags.map((tag: TagType, index: number) => (
        <Tag key={index} tag={tag} onDelete={onDelete} />
      ))}
      {/* 태그 입력창 */}
      <S.Input
        placeholder="태그를 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onEnter}
      />
    </S.Wrapper>
  );
};

export default TagCreator;
