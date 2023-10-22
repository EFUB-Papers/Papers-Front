import React, { useState } from 'react';
import { S } from './style';
import { Category } from '../../../constants/Category';

const CategoryBar = () => {
  const [category, setCategory] = useState<Category>(Category.CURRENT);

  return (
    <S.Wrppaer>
      {Object.entries(Category).map((entry, index: number) => {
        return (
          <S.CategoryItem
            key={index}
            $isSelected={category === entry[0]}
            onClick={() => setCategory(entry[0] as Category)}
          >
            {entry[1]}
          </S.CategoryItem>
        );
      })}
    </S.Wrppaer>
  );
};

export default CategoryBar;
