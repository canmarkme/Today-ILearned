const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

/**
 * A: 고정비용
 * B: 가변비용
 * C: 노트북 가격
 * M: 마진(Margin)
 * P: 손익분기점(BREAK-EVEN POINT)
 */

console.log(solution());

function solution() {
  const A = +input[0];
  const B = +input[1];
  const C = +input[2];

  const M = C - B;
  const P = Math.floor(A / M) + 1;

  return M > 0 ? P : -1;
}