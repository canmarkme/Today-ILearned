const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution(input) {
  for (let value of croatia) {

    // split() 메서드로 'c알파벳'을 찾고 join() 메서드로 문자를 치환합니다. (⭐ TOB)
    input = input.split(value).join("1");
  }

  // input일 경우 1e11ak를 반환
  return input.length;
}

console.log(solution(input));