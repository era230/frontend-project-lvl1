import runEngine from '../index.js';
import { getRandomNumber, numberOfRounds } from '../helpers.js';

const isEven = (num) => num % 2 === 0;

const getRounds = () => {
  const rounds = [[], [], []];
  for (let i = 1, j = 0; i <= numberOfRounds; i += 1, j += 1) {
    const randomNumber = getRandomNumber(0, 100);
    rounds[j].push(randomNumber);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    rounds[j].push(correctAnswer);
  }
  return rounds;
};

const ruleOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const startEvenGame = () => {
  runEngine(ruleOfTheGame, getRounds());
};

export default startEvenGame;
