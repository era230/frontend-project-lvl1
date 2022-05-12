import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have you name? ');

console.log(`Hello, ${userName}!`);