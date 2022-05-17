import readlineSync from 'readline-sync';

const askForAName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have you name?');
  console.log(`Hello, ${userName}!`);
};
export default askForAName;
