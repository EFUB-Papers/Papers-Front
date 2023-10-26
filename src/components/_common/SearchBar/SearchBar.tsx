import React, { useState } from 'react';
import { S } from './style';
import { ReactComponent as SearchIcon } from 'asset/searchBar/searchIcon.svg';
import { Category } from 'constants/Category';
import { ReactComponent as DownArrow } from 'asset/arrow/downArrow.svg';
import { ReactComponent as UpArrow } from 'asset/arrow/upArrow.svg';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [isSelectOpen, setIsSelectOpen] = useState([false, false]);
  return (
    <S.Wrapper>
      <S.SelectBox>
        {isSelectOpen[0] ? (
          <S.SelectWrapper>
            <S.OptionListWrapper>
              <S.OptionBox>제목, 내용</S.OptionBox>
              <S.OptionBox>태그</S.OptionBox>
            </S.OptionListWrapper>
            <S.IconWrapper>
              <UpArrow
                onClick={() => {
                  setIsSelectOpen([false, false]);
                }}
              />
            </S.IconWrapper>
          </S.SelectWrapper>
        ) : (
          <S.SelectWrapper>
            <S.OptionBox>제목, 내용</S.OptionBox>
            <S.IconWrapper>
              <DownArrow
                onClick={() => {
                  setIsSelectOpen([true, false]);
                }}
              />
            </S.IconWrapper>
          </S.SelectWrapper>
        )}

        {isSelectOpen[1] ? (
          <S.SelectWrapper>
            <S.OptionListWrapper>
              {Object.entries(Category).map((entry, index: number) => {
                return <S.OptionBox key={index}>{entry[1]}</S.OptionBox>;
              })}
            </S.OptionListWrapper>
            <S.IconWrapper>
              <UpArrow
                onClick={() => {
                  setIsSelectOpen([false, false]);
                }}
              />
            </S.IconWrapper>
          </S.SelectWrapper>
        ) : (
          <S.SelectWrapper>
            <S.OptionBox>{Category.CURRENT}</S.OptionBox>
            <S.IconWrapper>
              <DownArrow
                onClick={() => {
                  setIsSelectOpen([false, true]);
                }}
              />
            </S.IconWrapper>
          </S.SelectWrapper>
        )}
      </S.SelectBox>
      <S.SearchInput
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInput(e.target.value);
        }}
        placeholder={'검색어를 입력하세요.'}
      />
      <S.SearchIconWrapper>
        <SearchIcon />
      </S.SearchIconWrapper>
    </S.Wrapper>
  );
};

export default SearchBar;
