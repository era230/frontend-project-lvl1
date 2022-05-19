import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getGameValues = () => {
  const gameValues = [];
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = getRandomNumber(0, 201);
    const correctAnswer = isPrime(randomNumber);
    gameValues.push(randomNumber);
    gameValues.push(correctAnswer);
  }
  return gameValues;
};

const ruleOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startPrimeGame = () => {
  runEngine(ruleOfTheGame, getGameValues());
};

export default startPrimeGame;
