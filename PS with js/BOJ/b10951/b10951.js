const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let i = 0;
while (i < input.length - 1) {
  let num1 = input[i].split(' ').map(value => +value)[0];
  let num2 = input[i].split(' ').map(value => +value)[1];
  console.log(num1 + num2);
  i++;
}