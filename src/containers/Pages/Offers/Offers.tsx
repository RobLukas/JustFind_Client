import React, { FC } from 'react';

import { Header, Filters, Map, OffersList } from 'containers';
import offers from 'api/offers';

const Offers: FC = () => {
  return (
    <>
      <Header />
      <Filters />
      <OffersList offers={offers} />
      <Map />
    </>
  );
};

export default Offers;
