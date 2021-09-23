const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let n = +input[0];

for (let i = 1; i <= n; i++) {
  let score = input[i].split(' ');    // score: 각 점수 
  let studentNum = +score.shift();    // studentNum : 각 학생 수
  let sumScore = 0;
  let avgScore = 0;
  let count = 0;


  sumScore = score.reduce((prev, curr) => prev += Number(curr), 0);
  avgScore = sumScore / studentNum;

  for (value of score) {
    if (avgScore < value) count++;
  }

  let answer = ((count / studentNum) * 100).toFixed(3);
  console.log(answer + "%");

}