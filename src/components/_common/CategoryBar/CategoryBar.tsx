import React from 'react';
import { S } from './style';
import { useNavigate, useParams } from 'react-router-dom';
import {
  CATEGORY_WITHOUT_ALL,
  CategoryKeyType
} from '../../../constants/Category';

const CategoryBar = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  return (
    <S.Wrppaer>
      {Object.entries(CATEGORY_WITHOUT_ALL).map((entry, index: number) => {
        return (
          <S.CategoryItem
            key={index}
            $isSelected={(categoryId as CategoryKeyType) === entry[0]}
            onClick={() => navigate(`/category/${entry[0]}`)}
          >
            {entry[1]}
          </S.CategoryItem>
        );
      })}
    </S.Wrppaer>
  );
};

export default CategoryBar;
