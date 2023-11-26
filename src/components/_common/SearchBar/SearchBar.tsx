import React, { useState } from 'react';
import { S } from './style';
import { ReactComponent as SearchIcon } from 'asset/searchBar/searchIcon.svg';
import { ReactComponent as SearchIconWhite } from 'asset/searchBar/searchIconWhite.svg';
import {
  CATEGORY,
  CategoryKeyType,
  SEARCH_RANGE,
  SearchRangeKeyType
} from 'constants/Category';
import { ReactComponent as DownArrow } from 'asset/arrow/downArrow.svg';
import { ReactComponent as UpArrow } from 'asset/arrow/upArrow.svg';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { modeState } from '../../../atom/mode';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const [isSelectOpen, setIsSelectOpen] = useState([false, false]);
  const mode = useRecoilValue(modeState);
  const [searchOption, setSearchOption] = useState<
    [SearchRangeKeyType, CategoryKeyType]
  >(['all', 'all']);
  const navigate = useNavigate();
  const onClickSearchOption = ({
    sort,
    selectOption
  }: {
    sort: 'range' | 'category';
    selectOption: SearchRangeKeyType | CategoryKeyType;
  }) => {
    if (sort === 'range') {
      setSearchOption((prev) => [selectOption as SearchRangeKeyType, prev[1]]);
      setIsSelectOpen((prev) => [false, prev[1]]);
    } else {
      setSearchOption((prev) => [prev[0], selectOption as CategoryKeyType]);
      setIsSelectOpen((prev) => [prev[0], false]);
    }
  };

  //검색하는 함수
  const onSubmitSearch = () => {
    const url = `/search?range=${searchOption[0]}&category=${searchOption[1]}&keyword=${keyword}`;
    navigate(url);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmitSearch();
    }
  };

  return (
    <S.Wrapper>
      <S.SelectBox>
        {isSelectOpen[0] ? (
          <S.SelectWrapper value={'range'}>
            <S.OptionListWrapper>
              {Object.keys(SEARCH_RANGE).map((item: string) => (
                <S.OptionBox
                  key={item}
                  onClick={() => {
                    onClickSearchOption({
                      sort: 'range',
                      selectOption: String(item) as SearchRangeKeyType
                    });
                  }}
                >
                  {SEARCH_RANGE[item] as string}
                </S.OptionBox>
              ))}
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
          <S.SelectWrapper
            value={'range'}
            onClick={() => {
              setIsSelectOpen([true, false]);
            }}
          >
            <S.OptionBox>{SEARCH_RANGE[searchOption[0]]}</S.OptionBox>
            <S.IconWrapper>
              <DownArrow />
            </S.IconWrapper>
          </S.SelectWrapper>
        )}

        {isSelectOpen[1] ? (
          <S.SelectWrapper value={'category'}>
            <S.OptionListWrapper>
              {Object.keys(CATEGORY).map((item, index: number) => (
                <S.OptionBox
                  key={index}
                  onClick={() => {
                    onClickSearchOption({
                      sort: 'category',
                      selectOption: String(item) as CategoryKeyType
                    });
                  }}
                >
                  {CATEGORY[item] as CategoryKeyType}
                </S.OptionBox>
              ))}
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
          <S.SelectWrapper
            value={'category'}
            onClick={() => {
              setIsSelectOpen([false, true]);
            }}
          >
            <S.OptionBox>{CATEGORY[searchOption[1]]}</S.OptionBox>
            <S.IconWrapper>
              <DownArrow />
            </S.IconWrapper>
          </S.SelectWrapper>
        )}
      </S.SelectBox>
      <S.SearchInput
        onKeyPress={handleKeyPress}
        value={keyword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setKeyword(e.target.value);
        }}
        placeholder={'검색어를 입력하세요.'}
      />
      <S.SearchIconWrapper>
        {mode == 'light' ? (
          <SearchIcon onClick={onSubmitSearch} />
        ) : (
          <SearchIconWhite onClick={onSubmitSearch} />
        )}
      </S.SearchIconWrapper>
    </S.Wrapper>
  );
};

export default SearchBar;
