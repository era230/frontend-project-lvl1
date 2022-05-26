import readlineSync from 'readline-sync';

export const roundsCount = 3;

export const runEngine = (ruleOfTheGame, rounds) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleOfTheGame);
  for (let i = 1; i <= roundsCount; i += 1) {
    const round = rounds[i - 1];
    const [expression, correctAnswer] = round;
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
