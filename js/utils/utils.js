const getRandomNumber = (from, to, precission) => {
  const getRandom = (min, max, decimal) => {
    const number = min + Math.random() * (max - min) ;
    return !decimal ?  Math.round(number) : number.toFixed(decimal);
  };
  return (from < to) ? getRandom(from, to, precission) : getRandom (to, from, precission);
};

const getRandomElement = (array) => {
  const randomElement = array[getRandomNumber(0, (array.length -1))];
  return randomElement;
};

const getRandomArray = (array) => {
  const values = [];
  for (let i = 0; i < array.length; i++) {
    const element = getRandomElement(array);
    if (values.includes(element)) {
      continue;
    }
    values.push(element);
  }
  return values;
};

export {getRandomElement, getRandomNumber, getRandomArray};
