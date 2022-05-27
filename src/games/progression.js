import { roundsCount, runEngine } from '../index.js';
import getRandomNumber from '../helpers.js';

const getProgression = (length, startOfSequence, step) => {
  const progressionNumbers = [];
  let sequence = startOfSequence;
  for (let i = 1; i <= length; i += 1) {
    sequence += step;
    progressionNumbers.push(sequence);
  }
  return progressionNumbers;
};

const getRounds = () => {
  const rounds = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const startOfSequence = getRandomNumber(0, 50);
    const progressionLength = getRandomNumber(5, 10);
    const step = getRandomNumber(1, 12);
    const expression = getProgression(progressionLength, startOfSequence, step);
    const indexOfAnswer = getRandomNumber(0, progressionLength - 1);
    const correctAnswer = String(expression[indexOfAnswer]);
    expression[indexOfAnswer] = '..';
    const dataForRound = [expression, correctAnswer];
    rounds.push(dataForRound);
  }
  return rounds;
};

const ruleOfTheGame = 'What number is missing in the progression?';

const startProgressionGame = () => {
  runEngine(ruleOfTheGame, getRounds());
};

export default startProgressionGame;
