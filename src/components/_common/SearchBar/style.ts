import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 450px;
  height: 40px;
`;

const SearchInput = styled.input`
  display: flex;
  position: absolute;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 10px;
  padding-right: 40px;
  border: 1px solid ${({ theme }) => theme.COLOR.lightGrey};
  border-radius: 20px;
  font-size: 16px;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 7px;
`;

export const S = { Wrapper, SearchIconWrapper, SearchInput };
