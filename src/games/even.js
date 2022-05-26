import { roundsCount, runEngine } from '../index.js';
import getRandomNumber from '../helpers.js';

const isEven = (num) => num % 2 === 0;

const getRounds = () => {
  const rounds = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const valuesForRound = [];
    const randomNumber = getRandomNumber(0, 100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    valuesForRound.push(randomNumber);
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
