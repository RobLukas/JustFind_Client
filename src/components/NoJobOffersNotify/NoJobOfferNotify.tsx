import React, { FC } from 'react';
import S from './NoJobOfferNotify.styles';

const NoJobOfferTitle: FC = () => {
  return (
    <S.Wrapper>
      <S.Title>{'Sorry, there are no job offers.'}</S.Title>
    </S.Wrapper>
  );
};

export default NoJobOfferTitle;
