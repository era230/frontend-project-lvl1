import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

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
    const randomNumber1 = getRandomNumber(1, 101);
    const randomNumber2 = getRandomNumber(1, 101);
    const expression = `${randomNumber1} ${randomNumber2}`;
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
