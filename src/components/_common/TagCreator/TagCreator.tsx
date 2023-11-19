import React, { useState, useRef } from 'react';
import { TagType } from 'types/TagType';
import Tag from '../Tag/Tag';
import { S } from './style';
import { v4 as uuidv4 } from 'uuid';
import { OneTagType } from 'types/ScrapType';

type TagCreatorProps = {
  isCreator?: boolean;
  tags?: OneTagType[];
};

const TagCreator = ({ isCreator = true, tags = [] }: TagCreatorProps) => {
  const [tagId, setTagId] = useState(0);
  const [input, setInput] = useState('');
  const [tagList, setTagList] = useState<OneTagType[]>([...tags]);

  //태그 추가 (엔터 입력 시)
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setTagId((prev) => prev + 1);
      const newTag: OneTagType = {
        tagId: tagId,
        tagName: input
      };
      setTagList((currTagList) => [...currTagList, newTag]);
      setInput('');
    }
  };

  //태그 삭제 (X 버튼 클릭 시)
  const onDelete = (id: number) => {
    setTagList((currTagList) => currTagList.filter((tag) => tag.tagId !== id));
  };

  const inputWidthRef = useRef<HTMLSpanElement>(null);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    // 인풋의 가로길이 자동 조절
    if (inputWidthRef !== null && inputWidthRef.current !== null) {
      inputWidthRef.current.innerHTML = e.target.value;
    }
  };

  return (
    <S.Wrapper>
      {/* 태그 리스트 */}
      {tagList.map((tag: OneTagType, index: number) =>
        isCreator ? (
          <Tag key={index} tag={tag} onDelete={onDelete} />
        ) : (
          <Tag key={index} tag={tag} />
        )
      )}
      {/* 태그 입력창 */}
      {isCreator && (
        <S.InputWrapper>
          <S.InputWidth ref={inputWidthRef} aria-hidden="true"></S.InputWidth>
          <S.Input
            className="input"
            placeholder="태그를 입력하세요"
            value={input}
            onChange={onChangeInput}
            onKeyDown={onEnter}
            $empty={!input}
          />
        </S.InputWrapper>
      )}
    </S.Wrapper>
  );
};

export default TagCreator;
