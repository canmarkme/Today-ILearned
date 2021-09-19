const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(value => +value);
solution(input[0]);

function solution(num) {
  if ((num % 4 == 0) && (num % 100 != 0) || (num % 400 == 0)) {
    console.log("1");
    return;
  }
  console.log("0");
}
}