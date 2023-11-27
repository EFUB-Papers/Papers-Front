import React, { useEffect, useState } from 'react';
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
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
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
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  //새로고침시 내용 유지
  useEffect(() => {
    if (location.pathname === '/search') {
      setSearchOption([
        searchParams.get('searchby') as SearchRangeKeyType,
        searchParams.get('category') as CategoryKeyType
      ]);
      setKeyword(searchParams.get('keyword') || '');
    }
  }, []);

  const onClickSearchOption = ({
    sort,
    selectOption
  }: {
    sort: 'searchby' | 'category';
    selectOption: SearchRangeKeyType | CategoryKeyType;
  }) => {
    if (sort === 'searchby') {
      setSearchOption((prev) => [selectOption as SearchRangeKeyType, prev[1]]);
      setIsSelectOpen((prev) => [false, prev[1]]);
    } else {
      setSearchOption((prev) => [prev[0], selectOption as CategoryKeyType]);
      setIsSelectOpen((prev) => [prev[0], false]);
    }
  };

  //검색하는 함수
  const onSubmitSearch = () => {
    const url = `/search?searchby=${searchOption[0]}&category=${searchOption[1]}&keyword=${keyword}`;
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
        {/* 검색 범위 선택 */}
        {isSelectOpen[0] ? (
          <S.SelectWrapper value={'searchby'}>
            <S.OptionListWrapper>
              {Object.keys(SEARCH_RANGE).map((item: string) => (
                <S.OptionBox
                  key={item}
                  onClick={() => {
                    onClickSearchOption({
                      sort: 'searchby',
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
            value={'searchby'}
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
        {/* 카테고리 선택 */}
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
      {/* 인풋창 */}
      <S.SearchInput
        onKeyPress={handleKeyPress}
        value={keyword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setKeyword(e.target.value);
        }}
        placeholder={'검색어를 입력하세요.'}
      />
      {/* 돋보기 버튼 */}
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
