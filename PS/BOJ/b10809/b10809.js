const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let answer = '';
let count = 0;
let array = [];

for (let i = 0; i < input[0].length; i++) {
  for (let j = 97; j <= 122; j++) {
    if (input[0].charCodeAt(i) == j) {
      array[j] = i;
    }
  }
}

console.log(array);


