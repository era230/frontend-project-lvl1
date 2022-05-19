const getRandomNumber = (num1, num2, num3) => {
  const randomNumber = Math.floor((Math.random() + num1) * num2 + num3);
  return randomNumber;
};

export default getRandomNumber;
