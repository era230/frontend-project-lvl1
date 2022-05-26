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
  const rounds = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const expression = getRandomNumber(0, 200);
    const correctAnswer = isPrime(expression) ? 'yes' : 'no';
    const valuesForRound = [];
    valuesForRound.push(expression);
    valuesForRound.push(correctAnswer);
    rounds.push(valuesForRound);
  }
  return rounds;
};

const ruleOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startPrimeGame = () => {
  runEngine(ruleOfTheGame, getRounds());
};

export default startPrimeGame;
