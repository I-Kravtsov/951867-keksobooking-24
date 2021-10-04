const getRandomNumber = (from, to, precission) => {
  const getRandom = (min, max, decimal) => {
    const number = min + Math.random() * (max - min) ;
    return !decimal ?  Math.round(number) : number.toFixed(decimal);
  };
  return (from < to) ? getRandom(from, to, precission) : getRandom (to, from, precission);
};

const avatarNumber = String(getRandomNumber(0, 10)).padStart(2, 0);

const createAdvertisement = () => {
  return {
    author: {
      avatar: `img/avatars/user${avatarNumber}.png`,
    },
    offer: {
      title: 'New title',
      address: '',
      price: 0,
    },
    type: '',
    rooms: '',
    guests: 0,
    checkin: '',
    checkout: '',
    features: [],
    description: '',
    photos: [],
    location: {
      lat: 0,
      lng: 0,
    },
  }
}

console.log(createAdvertisement());