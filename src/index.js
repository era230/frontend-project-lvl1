import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';

const bodyOfTheGame = (ruleOfTheGame, resultArr) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleOfTheGame);
  for (let i = 1, j = 0; i <= 3; i += 1) {
    const expression = resultArr[j];
    const correctAnswer = resultArr[j + 1];
    const QuestionAnswer = cons(expression, correctAnswer);
    console.log(`Question: ${car(QuestionAnswer)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== cdr(QuestionAnswer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${cdr(QuestionAnswer)}.\nLet's try again, ${userName}!`);
      return;
    }
    if (userAnswer === cdr(QuestionAnswer)) {
      console.log('Correct!');
    }
    j += 2;
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default bodyOfTheGame;
