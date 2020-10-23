import React, { FC } from 'react';
import TitleProps from './Title.interface';
import S from './Title.styles';

const Title: FC<TitleProps> = ({ children }: TitleProps) => {
  return <S.Title>{children}</S.Title>;
};

export default Title;
