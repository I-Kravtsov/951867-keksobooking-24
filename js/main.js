import { createAdvertisement } from './utils/get-random-data.js';

const SIMILAR_ADVERTISMENT_COUNT = 10;

Array.from({length: SIMILAR_ADVERTISMENT_COUNT}, createAdvertisement);
