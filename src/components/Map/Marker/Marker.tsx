import React, { FC } from 'react';
import { Marker, Popup } from 'react-leaflet';

import PopupBox from '../PopupBox/PopupBox';
import createMarkerIcon from './createMarkerIcon';
import MarkerProps from 'api/offers.interface';
import getTechnologyResources from 'api/technologyResouces';

const MarkerMap: FC<MarkerProps> = (offer: MarkerProps) => {
  const { geoPosition, mainlyTechnology } = offer;
  const { markerIcon } = getTechnologyResources(mainlyTechnology);

  return (
    <Marker position={geoPosition} icon={createMarkerIcon(markerIcon)}>
      <Popup closeButton={false}>
        <PopupBox {...offer} />
      </Popup>
    </Marker>
  );
};

export default MarkerMap;
