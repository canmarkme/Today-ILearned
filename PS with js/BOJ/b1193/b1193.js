const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();  // X번째
const X = +input;
let sum = 0;
let index = 0;
let line = 0;

while (true) {
  line++;
  sum = (line * (line + 1)) / 2;
  if (X <= sum) {
    break;
  }
}


// 2. X가 속한 라인에서 X의 인덱스
// X(총길이) - (X-1)라인까지 값 
index = X - ((line - 1) * line / 2);


// 3. X가 속한 라인의 방향 찾기(짝수, 홀수)
line % 2 === 0 ? console.log(`${index}/${line - index + 1}`) : console.log(`${line - index + 1}/${line}`);