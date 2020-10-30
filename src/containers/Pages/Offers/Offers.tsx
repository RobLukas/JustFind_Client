import offers from 'api/offers';
import { Header } from 'components';
import Map from 'containers/Map/Map';
import OffersList from 'containers/OffersList/OffersList';
import ThemeWrapper from 'containers/ThemeWrapper/ThemeWrapper';

import React, { FC } from 'react';

const Offers: FC = () => {
  return (
    <ThemeWrapper>
      <>
        <Header />
        <OffersList offers={offers} />
        <Map />
      </>
    </ThemeWrapper>
  );
};

export default Offers;
