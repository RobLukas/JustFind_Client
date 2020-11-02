import offers from 'api/offers';
import { Header } from 'components';
import Filters from 'containers/Filters/Filters';
import Map from 'containers/Map/Map';
import OffersList from 'containers/OffersList/OffersList';

import React, { FC } from 'react';

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
