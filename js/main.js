import { createAdvertisement } from './utils/get-random-data.js';
import { getSimilarOffers } from './modules/get-similar-offers.js';
import  './modules/verify-form.js';
const SIMILAR_ADVERTISMENT_COUNT = 10;
const similarData = Array.from({length: SIMILAR_ADVERTISMENT_COUNT}, createAdvertisement);
const mapContainer = document.querySelector('.map__canvas');
mapContainer.style.overflow = 'scroll'; //Временно для отображения всех карточек.
mapContainer.appendChild(getSimilarOffers(similarData));

