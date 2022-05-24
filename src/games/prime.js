import runEngine from '../index.js';
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
  const numberOfRounds = 3;
  for (let i = 1, j = 0; i <= numberOfRounds; i += 1, j += 1) {
    const randomNumber = getRandomNumber(0, 200);
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    rounds[j].push(randomNumber);
    rounds[j].push(correctAnswer);
  }
  return rounds;
};

const ruleOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startPrimeGame = () => {
  runEngine(ruleOfTheGame, getRounds());
};

export default startPrimeGame;
