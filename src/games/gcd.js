import { roundsCount, runEngine } from '../index.js';
import getRandomNumber from '../helpers.js';

const getGCD = (a, b) => {
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
  const rounds = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const valuesForRound = [];
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const expression = `${randomNumber1} ${randomNumber2}`;
    const correctAnswer = String(getGCD(randomNumber1, randomNumber2));
    valuesForRound.push(expression);
    valuesForRound.push(correctAnswer);
    rounds.push(valuesForRound);
  }
  return rounds;
};

const ruleOfTheGame = 'Find the greatest common divisor of given numbers.';

const startGCDGames = () => {
  runEngine(ruleOfTheGame, getRounds());
};

export default startGCDGames;
