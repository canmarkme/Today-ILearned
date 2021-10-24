const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


/**
 * T: 테스트 케이스의 개수
 * R: 반복 횟수
 * S: 문자열
 */
const T = input.shift();

for (let i = 0; i < T; i++) {
  const [R, S] = input[i].split(" ");
  let answer = '';

  for (let j = 0; j < S.length; j++) {
    answer += S[j].repeat(R);
  }
  console.log(answer);
}
