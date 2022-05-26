import { roundsCount, runEngine } from '../index.js';
import getRandomNumber from '../helpers.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getRounds = () => {
  const rounds = [[], [], []];
  for (let i = 1; i <= roundsCount; i += 1) {
    const randomNumber = getRandomNumber(0, 200);
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    rounds[i - 1].push(randomNumber);
    rounds[i - 1].push(correctAnswer);
  }
  return rounds;
};

const ruleOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startPrimeGame = () => {
  runEngine(ruleOfTheGame, getRounds());
};

export default startPrimeGame;
