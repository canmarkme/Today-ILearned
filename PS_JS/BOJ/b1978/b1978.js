const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const numbers = input.shift().split(' ').map(value => +value);
let counter = 0;


for (let i = 0; i < N; i++) {
  // 0 또는 1일때,
  if (numbers[i] < 2) {
    continue;
  }

  for (let j = 2; j < numbers[i]; j++) {
    if (numbers[i] % i === 0) {
      continue;
    }
  }
  counter++;
}

console.log(counter);