import readlineSync from 'readline-sync';

const runEngine = (ruleOfTheGame, gameValues) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleOfTheGame);
  for (let i = 1, j = 0; i <= 3; i += 1) {
    const expression = gameValues[j];
    const correctAnswer = gameValues[j + 1];
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    }
    j += 2;
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default runEngine;
