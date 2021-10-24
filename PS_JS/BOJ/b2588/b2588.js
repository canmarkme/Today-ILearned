const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map(value => +value);
solution(input[0], input[1]);

function solution(A, B) {
  const strB = String(B);
  const units = +strB[2];
  const tens = +strB[1];
  const hundresds = +strB[0];

  console.log(A * units);
  console.log(A * tens);
  console.log(A * hundresds);
  console.log(A * B);
}
