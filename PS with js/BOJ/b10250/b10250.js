const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const T = +input.shift();    // 테스트 데이터 개수

for (let i = 0; i < T; i++) {
  const HWN = input[i].split(' ');
  const H = +HWN.shift();   // 호텔의 층 수
  HWN.shift();
  const N = +HWN.shift();   // 몇 번째 손님


  const floor = N % H;
  if (floor === 0) floor = H;
  const roomLastNo = Math.floor((N - 1) / H) + 1;
  roomLastNo < 10 ? console.log(`${floor}0${roomLastNo}`) : console.log(`${floor}${roomLastNo}`);

}
