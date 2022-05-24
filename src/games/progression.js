import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const getProgression = (length, startOfSequence, dif) => {
  const progressionNumbers = [];
  let sequence = startOfSequence;
  for (let i = 1; i <= length; i += 1) {
    sequence += dif;
    progressionNumbers.push(sequence);
  }
  return progressionNumbers;
};

const getRounds = () => {
  const rounds = [[], [], []];
  const numberOfRounds = 3;
  for (let i = 1, j = 0; i <= numberOfRounds; i += 1, j += 1) {
    const startOfSequence = getRandomNumber(0, 50);
    const randomLength = getRandomNumber(5, 10);
    const dif = getRandomNumber(1, 12);
    const progressionNumbers = getProgression(randomLength, startOfSequence, dif);
    const answerI = getRandomNumber(0, randomLength - 1);
    const correctAnswer = String(progressionNumbers[answerI]);
    progressionNumbers[answerI] = '..';
    rounds[j].push(progressionNumbers.join(' '));
    rounds[j].push(correctAnswer);
  }
  return rounds;
};

const ruleOfTheGame = 'What number is missing in the progression?';

const startProgressionGame = () => {
  runEngine(ruleOfTheGame, getRounds());
};

export default startProgressionGame;
