const getRandomInt = (from, to, decimal) => {
  const getRandom = (min, max, sign = 0) => {
    const number = Math.random() * (max - min) + min;
    return number.toFixed(sign);
  };
  return (from < to) ? getRandom(from, to, decimal) : getRandom (to, from, decimal);
};

getRandomInt(1, 3, 5);
