import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const checkPrime = (num) => {
  for (let i = 2; i * i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getGameValues = () => {
  const gameValues = [];
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = getRandomNumber(0, 200, 0);
    gameValues.push(randomNumber);
    const correct = checkPrime(randomNumber);
    gameValues.push(correct);
  }
  return gameValues;
};

const ruleOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startPrimeGame = () => {
  runEngine(ruleOfTheGame, getGameValues());
};

export default startPrimeGame;
