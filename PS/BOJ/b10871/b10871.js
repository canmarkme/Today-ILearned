const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num1 = input[0];
let num2 = input[1];

num1 = num1.split(' ').map(value => +value);
num2 = num2.split(' ').map(value => +value);

let answer = 0;

for (let i = 0; i < num1[0]; i++) {
  if (num1[1] <= num2[i]) {
    continue;
  }
  answer = answer + num2[i] + ' ';
}
console.log(answer);
