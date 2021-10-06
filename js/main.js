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

const TITLES = [
  'Cendre Hotel',
  'Peking Youth Hostel',
  'Grand Mercure Beijing Central',
  'Cote Cour Beijing',
  'Novotel Beijing Peace',
  ' Beijing Qianyuan',
  'Inner Mongolia Forbidden City',
];

const DESCRIPTIONS = [
  'Отель Happy Dragon Alley удобно расположен в самом центре Пекина, на территории исторического пекинского хутуна, в 3 минутах ходьбы от станции метро Zhangzizhong Road (линия 5).',
  'Отель Crowne Plaza Beijing Lido удобно расположен в центре известного престижного района Лидо с международными медицинскими центрами, ресторанами и барами, в 10 минутах езды от станции метро...',
  'Тихий хостел Peking Station расположен в старинном хутуне, всего в 15 минутах езды от оживленных торговых районов, включая пешеходную улицу Ванфуцзин.',
  'Xingshe Alley Courtyard Hotel is a traditional Chinese courtyard-style hotel centrally located in the famous Beijing hutong area. It features rooms with free internet access and private bathrooms.',
  'Рядом с метро Роскошный отель Marco Polo Parkside расположен в 2,5 км от Олимпийского парка и Национального стадиона. К услугам гостей просторные номера, крытый бассейн, 5 ресторанов и бесплатный доступ в Интернет....',
  'Комплекс Ascott Riverside Garden Beijing с фитнес-центром, бесплатным Wi-Fi и общественной парковкой расположен в Пекине в 7 км от Храма Неба и в 8 км от улицы Цяньмэнь.',
  'Отель Holiday Inn Express Beijing Minzuyuann разместился в оригинальном здании из стекла и камня, окруженном бамбуковыми растениями и прудом с карпами кои.',
  'Отель Beijing удобно расположен менее чем в 5 минутах ходьбы от дворцового комплекса «Запретный город» и площади Тяньаньмэнь. К услугам гостей крытый теннисный корт и бассейн.',
];


const getRandomElement = (array) => {
  return array[getRandomNumber(0, (array.length -1))];
};

const getRandomArray = (array) => {
  const randomArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = getRandomElement(array);
    if (randomArray.includes(element)) {
      continue;
    }
    randomArray.push(element);
  }
  return randomArray;
};

const avatarNumber = String(getRandomNumber(0, 10)).padStart(2, 0);

const createAdvertisement = () => {
  return {
    author: {
      avatar: `img/avatars/user${avatarNumber}.png`,
    },
    offer: {
      title: getRandomElement(TITLES),
      address: '',
      price: getRandomNumber(0, 100),
    },
    type: getRandomElement(TYPES),
    rooms: getRandomNumber(0, 7),
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
    location: {
      lat: getRandomNumber(35.65000, 35.70000, 5),
      lng: getRandomNumber(35.65000, 35.70000, 5),
    },
  };
};
createAdvertisement();
