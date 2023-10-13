import React, { useState } from 'react';
import { S } from './style';

export enum Category {
  CURRENT = '시사',
  CULTURE = '문화',
  TRAVEL = '여행',
  IT = 'IT',
  LIFE = '라이프',
  KNOWLEDGE = '지식',
  ETC = '기타'
}

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
