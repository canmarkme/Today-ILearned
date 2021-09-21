const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let i = 0;

while (i < input.length) {
  let num1 = input[i].split(" ").map(value => +value)[0];
  let num2 = input[i].split(" ").map(value => +value)[1];

  if (num1 != 0 && num2 != 0) {
    console.log(num1 + num2);

  } else {
    break;
  }
  i++;
}

