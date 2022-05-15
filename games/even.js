import bodyOfTheGame from '../src/index.js';

const makeArr = () => {
  const resultArr = [];
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    resultArr.push(randomNumber);
    const correct = randomNumber % 2 === 0 ? 'yes' : 'no';
    resultArr.push(correct);
  }
  return resultArr;
};

const ruleOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkParity = () => {
  bodyOfTheGame(ruleOfTheGame, makeArr());
};

export default checkParity;
