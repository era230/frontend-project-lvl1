import { roundsCount, runEngine } from '../index.js';
import getRandomNumber from '../helpers.js';

const getGCD = (a, b) => {
  const num1 = Math.max(a, b);
  const num2 = Math.min(a, b);
  return num2 === 0 ? num1 : getGCD(num2, num1 % num2);
};

const getRounds = () => {
  const rounds = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    const question = `${number1} ${number2}`;
    const correctAnswer = String(getGCD(number1, number2));
    const dataForRound = [question, correctAnswer];
    rounds.push(dataForRound);
  }
  return rounds;
};

const description = 'Find the greatest common divisor of given numbers.';

const startGCDGame = () => {
  runEngine(description, getRounds());
};

export default startGCDGame;
