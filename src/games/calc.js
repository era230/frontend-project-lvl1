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
  const rounds = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const number1 = getRandomNumber(0, 50);
    const number2 = getRandomNumber(0, 50);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomNumber(0, 2)];
    const expression = `${number1} ${operator} ${number2}`;
    const correctAnswer = String(calculateExpression(operator, number1, number2));
    const dataForRound = [expression, correctAnswer];
    rounds.push(dataForRound);
  }
  return rounds;
};

const ruleOfTheGame = 'What is the result of the expression?';

const startCalculatorGame = () => {
  runEngine(ruleOfTheGame, getRounds());
};

export default startCalculatorGame;
