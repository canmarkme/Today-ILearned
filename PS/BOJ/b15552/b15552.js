const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let answer = 0;
let num = 0;

for (let i = 1; i <= input[0]; i++) {
  num = input[i].split(' ');
  answer = answer + (Number(num[0]) + Number(num[1])) + "\n";
}
console.log(answer);
