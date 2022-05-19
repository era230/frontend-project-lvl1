import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const getGameValues = () => {
  const gameValues = [];
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber1 = getRandomNumber(0, 20);
    const randomNumber2 = getRandomNumber(0, 20);
    const operations = ['+', '-', '*'];
    const randomOperation = operations[Math.floor(Math.random(operations) * 3)];
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
    gameValues.push(expression);
    gameValues.push(correctAnswer);
  }
  return gameValues;
};

const ruleOfTheGame = 'What is the result of the expression?';

const startCalculatorGame = () => {
  runEngine(ruleOfTheGame, getGameValues());
};

export default startCalculatorGame;
