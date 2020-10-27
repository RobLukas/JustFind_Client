import React, { FC } from 'react';
import S from './NoJobOfferNotify.styles';

const NoJobOfferNotify: FC = () => {
  return (
    <S.Wrapper>
      <S.Title>{'Sorry, there are no job offers.'}</S.Title>
    </S.Wrapper>
  );
};

export default NoJobOfferNotify;
