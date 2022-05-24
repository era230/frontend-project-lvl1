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

const getRounds = () => {
  const rounds = [[], [], []];
  const numberOfRounds = 3;
  for (let i = 1, j = 0; i <= numberOfRounds; i += 1, j += 1) {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const expression = `${randomNumber1} ${randomNumber2}`;
    rounds[j].push(expression);
    const correctAnswer = String(getGcd(randomNumber1, randomNumber2));
    rounds[j].push(correctAnswer);
  }
  return rounds;
};

const ruleOfTheGame = 'Find the greatest common divisor of given numbers.';

const startGcdGames = () => {
  runEngine(ruleOfTheGame, getRounds());
};

export default startGcdGames;
