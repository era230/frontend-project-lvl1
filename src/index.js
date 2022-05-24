import readlineSync from 'readline-sync';
import numberOfRounds from './helpers.js';

const runEngine = (ruleOfTheGame, rounds) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleOfTheGame);
  for (let i = 1, j = 0; i <= numberOfRounds; i += 1, j += 1) {
    const round = rounds[j];
    const [expression, correctAnswer] = round;
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    }
    if (i === numberOfRounds) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default runEngine;
