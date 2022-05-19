import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const getCorrectAnswer = (operator, num1, num2) => {
  let correctAnswer;
  if (operator === '+') {
    correctAnswer = String(num1 + num2);
  }
  if (operator === '-') {
    correctAnswer = String(num1 - num2);
  }
  if (operator === '*') {
    correctAnswer = String(num1 * num2);
  }
  return correctAnswer;
};

const getGameValues = () => {
  const gameValues = [];
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber1 = getRandomNumber(0, 51);
    const randomNumber2 = getRandomNumber(0, 51);
    const operators = ['+', '-', '*'];
    const randomOperator = operators[getRandomNumber(0, 3)];
    const expression = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
    const correctAnswer = getCorrectAnswer(randomOperator, randomNumber1, randomNumber2);
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
