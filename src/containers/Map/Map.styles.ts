import { Map, MapProps } from 'react-leaflet';
import styled from 'styled-components';

const Wrapper = styled.div`
  @media (max-width: 1019px) {
    display: none;
  }
  @media (min-width: 1500px) {
    width: 50%;
  }
  width: 45%;
  position: fixed;
  top: 191px;
  right: 0;
  bottom: 0;
`;

const MapWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const MapLeaflet = styled(Map)<MapProps>`
  position: relative;
  outline: none;
`;

export default {
  Wrapper,
  MapWrapper,
  MapLeaflet,
};
