const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();


// 방법 1) 코드가 간략하고 보기 좋지만, 시간 초과..(ㆆ_ㆆ)
/*
let divider = 2;
while (input !== 1) {
  if (input % divider === 0) {
    console.log(divider);
    input /= divider;
  } else {
    divider++;
  }
}
*/

// 방법 2) 방법 1보다 시간이 더 오래 걸렸는데 통과..
// 먼저 소수를 찾습니다.
let resultArr = [];
let result = [];
let answer = '';

// 1. input 약수를 구합니다. 
for (let i = 1; i <= input; i++) {
  if ((input % i) === 0) {
    resultArr.push(i);
  }
}

let len = resultArr.length;
while (input !== 1) {
  let min;

  // 2. input 약수 중 가장 작은 수(min)를 찾습니다.
  for (let i = 1; i < len; i++) {
    if ((input % resultArr[i]) === 0) {
      min = resultArr[i];
      break;
    }
  }

  result.push(min);

  // 3. input을 min으로 나눠 더 이상 나누어지지 않을 때까지 계산합니다.
  while (true) {
    input = input / min;
    if (input % min !== 0) {
      break;
    }

    // 4. 3에서 계산된 몫을 result 배열에 push()
    result.push(min);
  }

}

result.forEach(element => {
  answer += element + '\n';
});
console.log(answer);