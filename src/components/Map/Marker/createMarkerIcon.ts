import L, { Icon } from 'leaflet';

export default (iconSrc: string): Icon =>
  new L.Icon({
    iconUrl: iconSrc,
    iconRetinaUrl: iconSrc,
    popupAnchor: [0, -28],
    iconSize: new L.Point(40, 40),
    className: 'leaflet-marker-icon',
  });
