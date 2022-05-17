import bodyOfTheGame from '../src/index.js';

const makeArr = () => {
  let sequence = Math.floor(Math.random() * 50);
  const arr = [sequence];
  const randomLength = Math.floor((Math.random() * (10 - 5) + 5));
  const dif = Math.floor((Math.random() + 0.1) * 15);
  for (let i = 1; i <= randomLength; i += 1) {
    sequence += dif;
    arr.push(sequence);
  }
  const answerI = Math.floor(Math.random() * (randomLength - 1));
  const answer = arr[answerI];
  arr[answerI] = '..';
  const resultArr = [arr.join(' '), answer];
  return resultArr;
};

const ruleOfTheGame = 'What number is missing in the progression?';

const progression = () => {
  bodyOfTheGame(ruleOfTheGame, makeArr());
};

export default progression;
