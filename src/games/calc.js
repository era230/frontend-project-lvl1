import { roundsCount, runEngine } from '../index.js';
import getRandomNumber from '../helpers.js';

const calculateExpression = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getRounds = () => {
  const rounds = [[], [], []];
  for (let i = 1; i <= roundsCount; i += 1) {
    const randomNumber1 = getRandomNumber(0, 50);
    const randomNumber2 = getRandomNumber(0, 50);
    const operators = ['+', '-', '*'];
    const randomOperator = operators[getRandomNumber(0, 2)];
    const expression = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
    const correctAnswer = String(calculateExpression(randomOperator, randomNumber1, randomNumber2));
    rounds[i - 1].push(expression);
    rounds[i - 1].push(correctAnswer);
  }
  return rounds;
};

const ruleOfTheGame = 'What is the result of the expression?';

const startCalculatorGame = () => {
  runEngine(ruleOfTheGame, getRounds());
};

export default startCalculatorGame;
