const getRandomNumber = (num1, num2) => {
  const randomNumber = Math.floor((Math.random() + num1) * num2);
  return randomNumber;
};

export default getRandomNumber;
