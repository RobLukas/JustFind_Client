import React, { FC } from 'react';
import CategoryButtonProps from './CategoryButton.interface';
import S from './CategoryButton.styles';

const CategoryButton: FC<CategoryButtonProps> = ({
  children,
}: CategoryButtonProps) => {
  return <S.CategoryButton>{children}</S.CategoryButton>;
};

export default CategoryButton;
