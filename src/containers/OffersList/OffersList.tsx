import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import OffersListProps from './OffersList.interface';
import S from './OffersList.styles';
import { OfferDetails } from 'components';
import NoJobOfferTitle from 'components/common/NoJobOffersNotify/NoJobOfferNotify';

const OffersList: FC<OffersListProps> = ({ offers }: OffersListProps) => {
  const isOffersListEmpty = !offers.length;
  return (
    <S.Wrapper>
      {isOffersListEmpty ? (
        <NoJobOfferTitle />
      ) : (
        <S.ListOfItems>
          {offers.map((offerItem) => (
            <OfferDetails key={uuidv4()} {...offerItem} />
          ))}
        </S.ListOfItems>
      )}
    </S.Wrapper>
  );
};

export default OffersList;
