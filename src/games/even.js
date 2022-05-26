import { roundsCount, runEngine } from '../index.js';
import getRandomNumber from '../helpers.js';

const isEven = (num) => num % 2 === 0;

const getRounds = () => {
  const rounds = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const valuesForRound = [];
    const expression = getRandomNumber(0, 100);
    const correctAnswer = isEven(expression) ? 'yes' : 'no';
    valuesForRound.push(expression);
    valuesForRound.push(correctAnswer);
    rounds.push(valuesForRound);
  }
  return rounds;
};

const ruleOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const startEvenGame = () => {
  runEngine(ruleOfTheGame, getRounds());
};

export default startEvenGame;
