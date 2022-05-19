import runEngine from '../index.js';

const prime = (num) => {
  for (let i = 2; i * i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const makeArr = () => {
  const resultArr = [];
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 200);
    resultArr.push(randomNumber);
    const correct = prime(randomNumber);
    resultArr.push(correct);
  }
  return resultArr;
};

const ruleOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startPrimeGame = () => {
  runEngine(ruleOfTheGame, makeArr());
};

export default startPrimeGame;
