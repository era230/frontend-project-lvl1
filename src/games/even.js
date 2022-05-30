import { roundsCount, runEngine } from '../index.js';
import getRandomNumber from '../helpers.js';

const isEven = (num) => num % 2 === 0;

const getRounds = () => {
  const rounds = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const question = getRandomNumber(0, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    const dataForRound = [question, correctAnswer];
    rounds.push(dataForRound);
  }
  return rounds;
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const startEvenGame = () => {
  runEngine(description, getRounds());
};

export default startEvenGame;
