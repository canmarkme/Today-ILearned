let input = [
  [[5, 9, 7, 10], 5],
  [[2, 36, 1, 3], 1],
  [[3, 2, 6], 10]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i][0], input[i][1]));
}

// 강사님 방법 1) for문을 안쓰는 방법으로 filter 사용
function solution(arr, divisor) {

  // 1. arr 초기화
  let answer = arr.filter(n => n & divisor == 0);

  return answer.length ? answer.sort((x, y) => x - y) : [-1];
}



// 정민이 방법   
function solution(arr, divisor) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) answer.push(arr[i]);
  }

  if (answer.length == 0) answer.push(-1);

  return answer.sort((x, y) => x - y);
}

