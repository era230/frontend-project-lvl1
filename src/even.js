import readlineSync from 'readline-sync';

const checkParity = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const checkNumber = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${checkNumber}'.\nLet's try again, ${userName}!`);
      return;
    }
    if (checkNumber === userAnswer) {
      console.log('Correct!');
    }
    if (checkNumber !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${checkNumber}'.\nLet's try again, ${userName}!`);
      return;
    }
    if (i === 3) {
      console.log(`Congratulations, ${userName}`);
    }
  }
};

export default checkParity;