const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(value => +value);
answer = 0;

for (let i = 1; i <= input[0]; i++) {
  answer = answer + i + "\n";
}
console.log(answer);