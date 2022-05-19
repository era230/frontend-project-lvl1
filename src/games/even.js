import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const getGameValues = () => {
  const gameValues = [];
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = getRandomNumber(0, 101);
    gameValues.push(randomNumber);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    gameValues.push(correctAnswer);
  }
  return gameValues;
};

const ruleOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const startEvenGame = () => {
  runEngine(ruleOfTheGame, getGameValues());
};

export default startEvenGame;
