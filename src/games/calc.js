import runEngine from '../index.js';
import { getRandomNumber, numberOfRounds } from '../helpers.js';

const calculateExpression = (operator, num1, num2) => {
  let answer;
  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
  return answer;
};

const getRounds = () => {
  const rounds = [[], [], []];
  for (let i = 1, j = 0; i <= numberOfRounds; i += 1, j += 1) {
    const randomNumber1 = getRandomNumber(0, 50);
    const randomNumber2 = getRandomNumber(0, 50);
    const operators = ['+', '-', '*'];
    const randomOperator = operators[getRandomNumber(0, 2)];
    const expression = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
    const correctAnswer = String(calculateExpression(randomOperator, randomNumber1, randomNumber2));
    rounds[j].push(expression);
    rounds[j].push(correctAnswer);
  }
  return rounds;
};

const ruleOfTheGame = 'What is the result of the expression?';

const startCalculatorGame = () => {
  runEngine(ruleOfTheGame, getRounds());
};

export default startCalculatorGame;
