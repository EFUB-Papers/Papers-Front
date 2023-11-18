import React, { useState } from 'react';
import { S } from './style';
import {
  CategoryValuesType,
  CategoryWithoutAll
} from '../../../constants/Category';

const CategoryBar = () => {
  const [category, setCategory] = useState<CategoryValuesType>();
  return (
    <S.Wrppaer>
      {Object.entries(CategoryWithoutAll).map((entry, index: number) => {
        return (
          <S.CategoryItem
            key={index}
            $isSelected={category === entry[1]}
            onClick={() => setCategory(entry[1])}
          >
            {entry[1]}
          </S.CategoryItem>
        );
      })}
    </S.Wrppaer>
  );
};

export default CategoryBar;
