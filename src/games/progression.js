import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const getGameValues = () => {
  const gameValues = [];
  for (let i = 1; i <= 3; i += 1) {
    let sequence = getRandomNumber(0, 50, 0);
    const progressionNumbers = [sequence];
    const randomLength = getRandomNumber(0, (10 - 5), 5);
    const dif = getRandomNumber(0.1, 12, 0);
    for (let j = 1; j <= randomLength; j += 1) {
      sequence += dif;
      progressionNumbers.push(sequence);
    }
    const answerI = getRandomNumber(0, randomLength - 1, 0);
    const answer = String(progressionNumbers[answerI]);
    progressionNumbers[answerI] = '..';
    gameValues.push(progressionNumbers.join(' '));
    gameValues.push(answer);
  }
  return gameValues;
};

const ruleOfTheGame = 'What number is missing in the progression?';

const startProgressionGame = () => {
  runEngine(ruleOfTheGame, getGameValues());
};

export default startProgressionGame;
