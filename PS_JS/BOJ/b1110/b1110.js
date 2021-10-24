const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let origin = Number(input);
let count = 0;

while (true) {
  let sum = Math.floor(input / 10) + (input % 10);
  input = (input % 10) * 10 + (sum % 10);
  count++;
  if (origin == input) break;
}
console.log(count);


// 시간 초과
/*
let num = input[0];
let i = 0;

while (true) {
  if (num / 10 < 1 && String(num)[1] == null) {
    num = "0" + num;
  }

  let newNum = '';
  newNum = Number(num.charAt(0)) + Number(num.charAt(1));

  if (newNum / 10 < 1 && String(newNum)[1] == null) {
    newNum = "0" + newNum;
  }
  num = num.charAt(1) + String(newNum).charAt(1);

  i++;


  if (input[0] == num || input[0] == 0) {
    break;
  }
};
console.log(i);
*/







