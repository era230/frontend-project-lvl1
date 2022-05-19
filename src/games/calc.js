import runEngine from '../index.js';

const makeArr = () => {
  const resultArr = [];
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);
    const arr = ['+', '-', '*'];
    const randomOperation = arr[Math.floor(Math.random(arr) * 3)];
    let expression;
    let correctAnswer;
    if (randomOperation === '+') {
      expression = `${randomNumber1} + ${randomNumber2}`;
      correctAnswer = String(randomNumber1 + randomNumber2);
    }
    if (randomOperation === '-') {
      expression = `${randomNumber1} - ${randomNumber2}`;
      correctAnswer = String(randomNumber1 - randomNumber2);
    }
    if (randomOperation === '*') {
      expression = `${randomNumber1} * ${randomNumber2}`;
      correctAnswer = String(randomNumber1 * randomNumber2);
    }
    resultArr.push(expression);
    resultArr.push(correctAnswer);
  }
  return resultArr;
};

const ruleOfTheGame = 'What is the result of the expression?';

const startCalculatorGame = () => {
  runEngine(ruleOfTheGame, makeArr());
};

export default startCalculatorGame;
