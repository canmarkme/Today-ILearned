const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

// 방법 1) for문
let num1 = "";
let num2 = "";

for (let i = 2; i > -1; i--) {
  num1 += input[0].charAt(i);
  num2 += input[1].charAt(i);
}

console.log(num1 < num2 ? num2 : num1);


// 방법 2) reverse() 
const [a, b] = input.map(v => [...v].reverse().join(''));
console.log(a < b ? b : a);