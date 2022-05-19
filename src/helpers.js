const getRandomNumber = (num1, num2, num3, coll) => {
  const randomNumber = Math.floor((Math.random(coll) + num1) * num2 + num3);
  return randomNumber;
};

export default getRandomNumber;
