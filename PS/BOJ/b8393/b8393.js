const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(value => +value);
solution(input[0]);

function solution(num1) {
  let answer = 0;
  for (let i = 1; i <= num1; i++) {
    answer += i;
  }
  console.log(answer);
}