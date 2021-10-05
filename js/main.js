/* eslint-disable arrow-body-style */
const getRandomNumber = (from, to, precission) => {
  const getRandom = (min, max, decimal) => {
    const number = min + Math.random() * (max - min) ;
    return !decimal ?  Math.round(number) : number.toFixed(decimal);
  };
  return (from < to) ? getRandom(from, to, precission) : getRandom (to, from, precission);
};

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN_TIMES =[
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];


const getRandomElement = (array) => {
  return array[getRandomNumber(0, (array.length -1))];
};

const getRandomArray = (array) => {
  const arrayLength = getRandomNumber(1, (array.length -1));
  return arrayLength;
}

const avatarNumber = String(getRandomNumber(0, 10)).padStart(2, 0);

const createAdvertisement = () => {
  return {
    author: {
      avatar: `img/avatars/user${avatarNumber}.png`,
    },
    offer: {
      title: 'New title',
      address: '',
      price: getRandomNumber(0, 100),
    },
    type: getRandomElement(TYPES),
    rooms: getRandomNumber(0, 7),
    guests: getRandomNumber(0, 7),
    checkin: getRandomElement(CHECKIN_TIMES),
    get checkout () {
      return this.checkin;
    },
    features: getRandomArray(FEATURES),
    description: '',
    photos: [],
    location: {
      lat: getRandomNumber(35.65000, 35.70000, 5),
      lng: getRandomNumber(35.65000, 35.70000, 5),
    },
  };
};

console.log(createAdvertisement());