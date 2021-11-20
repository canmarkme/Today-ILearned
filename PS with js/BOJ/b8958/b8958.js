const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input[0];

for (let i = 1; i <= n; i++) {
  input[i].split(' ');

  let sum = 0;
  let count = 0;
  for (value of input[i]) {
    if (value == 'O') {
      count++;
      sum += count;
    } else {
      count = 0;
    }
  }
  console.log(sum);
}