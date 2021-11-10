import {TYPES, CHECKIN_TIMES, FEATURES, PHOTOS,TITLES,DESCRIPTIONS} from './data.js';
import {getRandomElement, getRandomNumber, getRandomArray} from './utils.js';

const createAdvertisement = () => {
  const latValue = getRandomNumber(35.65000, 35.70000, 5);
  const lngValue = getRandomNumber(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: `img/avatars/user${String(getRandomNumber(1, 10)).padStart(2, 0)}.png`,
    },
    offer: {
      title: getRandomElement(TITLES),
      address: `${latValue}, ${lngValue}`,
      price: getRandomNumber(0, 100000),
      type: getRandomElement(TYPES),
      rooms: getRandomNumber(1, 7),
      get guests () {
        return this.rooms;
      },
      checkin: getRandomElement(CHECKIN_TIMES),
      get checkout () {
        return this.checkin;
      },
      features: getRandomArray(FEATURES),
      description: getRandomElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      lat:  latValue,
      lng: lngValue,
    },
  };
};

export {createAdvertisement};
