import React, { useState } from 'react';
import { S } from './style';
import { Category, CategoryValuesType } from '../../../constants/Category';
import { useNavigate } from 'react-router-dom';

const CategoryBar = () => {
  const [category, setCategory] = useState<CategoryValuesType>();
  const navigate = useNavigate();

  return (
    <S.Wrppaer>
      {Object.entries(Category).map((entry, index: number) => {
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
