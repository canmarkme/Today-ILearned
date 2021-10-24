const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let num = 0;
num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let answer = '';

  for (let j = num; j >= 1; j--) {
    answer += i >= j ? '*' : ' ';
  }
  console.log(answer);
}