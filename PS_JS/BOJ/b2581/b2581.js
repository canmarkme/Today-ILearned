const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const start = +(input.shift());
const end = +(input.shift());
let arr = [];
let sum = 0;

for (let i = start; i <= end; i++) {
  //if (i < 2) break;

  for (let j = 2; j <= i; j++) {
    if (j * j > i) {
      arr.push(i);
      sum += i;
      break;
    }
    if (i % j === 0) break;
  }
}


if (!arr.length) {  // arr.length === 0
  console.log(-1);

} else {
  console.log(sum);
  console.log(arr[0]);
}