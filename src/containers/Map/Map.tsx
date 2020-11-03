import React, { FC } from 'react';
import 'leaflet/dist/leaflet.css';
import { TileLayer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';

import S from './Map.styles';
import { MarkerMap } from 'components';
import { darkModeMap, lightModeMap } from 'styles/theme/mapMode';
import { selectIsDarkMode } from 'features/ThemeMode/themeModeSlice';
import offers from 'api/offers';

const Map: FC = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const themeModeMap = isDarkMode ? darkModeMap : lightModeMap;

  const position: LatLngTuple = [51.9189046, 19.1343786];

  return (
    <S.Wrapper>
      <S.MapWrapper>
        <S.MapLeaflet center={position} zoom={6} animate={true}>
          <TileLayer url={themeModeMap} />
          {offers.map((offer) => (
            <MarkerMap key={uuid()} {...offer} />
          ))}
        </S.MapLeaflet>
      </S.MapWrapper>
    </S.Wrapper>
  );
};

export default Map;
