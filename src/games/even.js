import runEngine from '../index.js';

const getGameValues = () => {
  const gameValues = [];
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    gameValues.push(randomNumber);
    const correct = randomNumber % 2 === 0 ? 'yes' : 'no';
    gameValues.push(correct);
  }
  return gameValues;
};

const ruleOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const startEvenGame = () => {
  runEngine(ruleOfTheGame, getGameValues());
};

export default startEvenGame;
