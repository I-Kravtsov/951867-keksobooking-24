import {setInactivState} from './toggle-state.js';
import { getSimilarOffer } from './get-similar-offers.js';
import {getData} from './fetch.js';
import { showLoadErrorMessage } from './info-messages.js';
// Temporarry
// import { createAdvertisement } from '../utils/get-random-data.js';
setInactivState('infactive');
// const similarData = Array.from({length: 10}, createAdvertisement);
// ------------------
const START_COORDS = {lat:35.68172, lng:139.75392};
const addressField = document.querySelector('#address');
const mainPinIcon = L.icon({
  iconUrl:'../../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const mainPin = L.marker(
  START_COORDS,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
const map = L.map('map-canvas')
  .on('load', () => {
    setInactivState('active');
  })
  .setView(START_COORDS, 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


const resetMap = () => {
  mainPin.setLatLng(START_COORDS);
  map.setView(START_COORDS, 12);
  addressField.value = `${START_COORDS.lat}, ${START_COORDS.lng}`;
};

mainPin.addTo(map);
resetMap();

mainPin.on('moveend', (evt) => {
  const coords = evt.target.getLatLng();
  const {lat, lng} = coords;
  addressField.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

const addSimillarPoints = (points) => {
  points.forEach((point) => {
    const {location} = point;
    const markerIcon = L.icon({
      iconUrl: '../../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor:[20, 40],
    });
    const popup = L.popup().setContent(getSimilarOffer(point));
    const marker = L.marker(location, {icon: markerIcon});
    marker.addTo(map).bindPopup(popup);
  });
};

getData((data) => {
  addSimillarPoints(data.slice(0, 10));
}, showLoadErrorMessage);

export {resetMap};
