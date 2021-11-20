const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let count = +input[0];
let score = input[1].split(' ');

let max = Math.max(...score);
let sum = 0;

for (value of score) {
  sum = sum + value / max * 100;
}

console.log(sum / count);