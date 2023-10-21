import React, { useState } from "react";
import { S } from "./style";
import { ReactComponent as SearchIcon } from "asset/searchBar/searchIcon.svg";

const SearchBar = () => {
  const [input, setInput] = useState("");

  return (
    <S.Wrapper>
      <S.SearchInput
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInput(e.target.value);
        }}
      />
      <S.SearchIconWrapper>
        <SearchIcon />
      </S.SearchIconWrapper>
    </S.Wrapper>
  );
};

export default SearchBar;
