const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const T = +input.shift();       // 테스트 케이스의 수

for (let i = 0; i < T; i++) {
  const a = +input.shift();
  const b = +input.shift();
  const residentsNo = [];       // 거주민의 수

  for (let i = 0; i <= a; i++) {

    // residentsNo의 첫 번째 열은 언제나 1입니다.
    residentsNo.push([1]);

    for (let j = 1; j < b; j++) {

      // 0층인 경우, 열이 +1씩 증가하기 때문에 j+1
      if (i === 0) {
        residentsNo[i].push(j + 1);

        // 0층 외에, 🤞 Comment 의 표 참고 
      } else {
        residentsNo[i].push(residentsNo[i][j - 1] + residentsNo[i - 1][j]);
      }
    }
  }

  const floor = a;
  const room = b - 1;   // 0부터 시작하기 때문에 -1 해줍니다.
  console.log(residentsNo[floor][room]);
}