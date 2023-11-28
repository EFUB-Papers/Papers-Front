import styled from 'styled-components';

const Wrppaer = styled.div`
  width: 420px;
  display: flex;
  margin: 4px;
  border-top: 1px solid ${({ theme }) => theme.line};
  height: 40px;
`;

const CategoryItem = styled.div<{ $isSelected: boolean }>`
  width: 60px;
  text-align: center;
  ${({ $isSelected, theme }) =>
    $isSelected && `border-top: 3px solid ${theme.COLOR.mint}`};

  &:hover {
    cursor: pointer;
  }

  padding-top: 10px;
`;

export const S = { Wrppaer, CategoryItem };
