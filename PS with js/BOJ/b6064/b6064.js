const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

input.shift(); // T개의 테스트 데이터

for (const datas of input) {
  const data = datas.split(' ').map(value => +value);
  const M = data[0];
  const N = data[1];
  const x = data[2];
  const y = data[3];

  let k = -1; // k번째 해를 구하시오!
  let index = 0;

  while (true) {
    if ((M * index + x) % N === y) {
      k = M * index + x;
      break;
    }

    if (M * index + x > M * N) break;
    index++;
  }
  console.log(k);
}
