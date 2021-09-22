const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let num = String(input[0] * input[1] * input[2]);

for (let i = 0; i < 10; i++) {
  let cnt = 0;
  for (key in num) {
    if (Number(num[key]) === i) cnt++;
  }
  console.log(cnt);
}
