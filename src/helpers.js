const getRandomNumber = (min, max, coll) => {
  const randomNumber = Math.floor(Math.random(coll) * (max - min)) + min;
  return randomNumber;
};

export default getRandomNumber;
