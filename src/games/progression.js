import runEngine from '../index.js';

const getGameValues = () => {
  const gameValues = [];
  for (let i = 1; i <= 3; i += 1) {
    let sequence = Math.floor(Math.random() * 50);
    const arr = [sequence];
    const randomLength = Math.floor((Math.random() * (10 - 5) + 5));
    const dif = Math.floor((Math.random() + 0.1) * 12);
    for (let j = 1; j <= randomLength; j += 1) {
      sequence += dif;
      arr.push(sequence);
    }
    const answerI = Math.floor(Math.random() * (randomLength - 1));
    const answer = String(arr[answerI]);
    arr[answerI] = '..';
    gameValues.push(arr.join(' '));
    gameValues.push(answer);
  }
  return gameValues;
};

const ruleOfTheGame = 'What number is missing in the progression?';

const startProgressionGame = () => {
  runEngine(ruleOfTheGame, getGameValues());
};

export default startProgressionGame;
