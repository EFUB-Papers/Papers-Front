import React, { useRef, useState } from 'react';
import Tag from '../Tag/Tag';
import { S } from './style';
import { OneTagType } from 'types/ScrapType';
import { v4 } from 'uuid';
import { NewTagType } from 'types/TagType';

type TagCreatorProps = {
  isCreator?: boolean;
  newTagList: NewTagType[];
  setNewTagList?: React.Dispatch<React.SetStateAction<NewTagType[]>>;
};

const TagCreator = ({
  isCreator = true,
  newTagList = [],
  setNewTagList
}: TagCreatorProps) => {
  const [input, setInput] = useState('');

  //태그 추가 (엔터 입력 시)
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onCreateTag();
    }
  };

  const onCreateTag = () => {
    const newTag: NewTagType = {
      tagId: v4(),
      tagName: input
    };
    setNewTagList && setNewTagList((currTagList) => [...currTagList, newTag]);
    setInput('');
  };

  //태그 삭제 (X 버튼 클릭 시)
  const onDelete = (id: string) => {
    setNewTagList &&
      setNewTagList((currTagList) =>
        currTagList.filter((tag) => tag.tagId !== id)
      );
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
      {newTagList.map((tag: NewTagType, index: number) =>
        isCreator ? (
          <Tag
            key={index}
            tagId={tag.tagId}
            tagName={tag.tagName}
            onDelete={onDelete}
          />
        ) : (
          <Tag key={index} tagId={tag.tagId} tagName={tag.tagName} />
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
            maxLength={40}
            $empty={!input}
          />
        </S.InputWrapper>
      )}
    </S.Wrapper>
  );
};

export default TagCreator;
