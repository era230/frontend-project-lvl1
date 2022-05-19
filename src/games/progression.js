import runEngine from '../index.js';

const makeArr = () => {
  const resultArr = [];
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
    resultArr.push(arr.join(' '));
    resultArr.push(answer);
  }
  return resultArr;
};

const ruleOfTheGame = 'What number is missing in the progression?';

const startProgressionGame = () => {
  runEngine(ruleOfTheGame, makeArr());
};

export default startProgressionGame;
