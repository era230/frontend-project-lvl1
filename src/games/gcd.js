import runEngine from '../index.js';

const getGcd = (a, b) => {
  let num1 = Math.max(a, b);
  let num2 = Math.min(a, b);
  let reminder = num1 % num2;
  while (num1 % num2 !== 0) {
    reminder = num1 % num2;
    num1 = num2;
    num2 = reminder;
  }
  return num2;
};

const getGameValues = () => {
  const gameValues = [];
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    const expression = String(`${randomNumber1} ${randomNumber2}`);
    gameValues.push(expression);
    const correctAnswer = String(getGcd(randomNumber1, randomNumber2));
    gameValues.push(correctAnswer);
  }
  return gameValues;
};

const ruleOfTheGame = 'Find the greatest common divisor of given numbers.';

const startGcdGames = () => {
  runEngine(ruleOfTheGame, getGameValues());
};

export default startGcdGames;
