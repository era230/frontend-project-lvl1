import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question('May I have you name? ');
const askForAName = () => {
  console.log(`Hello, ${userName}!`);
};
export default askForAName;
