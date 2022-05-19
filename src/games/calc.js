import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const getCorrectAnswer = (operation, num1, num2) => {
  let correctAnswer;
  if (operation === '+') {
    correctAnswer = String(num1 + num2);
  }
  if (operation === '-') {
    correctAnswer = String(num1 - num2);
  }
  if (operation === '*') {
    correctAnswer = String(num1 * num2);
  }
  return correctAnswer;
};

const getGameValues = () => {
  const gameValues = [];
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber1 = getRandomNumber(0, 20, 0);
    const randomNumber2 = getRandomNumber(0, 20, 0);
    const operations = ['+', '-', '*'];
    const randomOperation = operations[getRandomNumber(0, 3, 0, operations)];
    const expression = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
    const correctAnswer = getCorrectAnswer(randomOperation, randomNumber1, randomNumber2);
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
