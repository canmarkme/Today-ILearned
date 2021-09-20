const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
  num = input[i].split(' ').map(value => +value);
  console.log(num[0] + num[1]);
}