
let input = [
  [129, 137],
  [1412, 1918],
  [4159, 9182]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

function answer(M, N) {
  let result = [];
  let num = 0;
  // result 초기화
  for (let i = 0; i < 10; i++) {
    result[i] = 0;
  }

  // 1. M부터 N까지 순회
  for (let i = M; i <= N; i++) {
    num = i;

    // 2. N = %, /로 구합니다.
    while (num != 0) {
      result[num % 10]++;      // 숫자 해당 인덱스에 +1 합니다. 
      num /= 10;
      num = parseInt(num);    // 소수(decimal)를 정수로 만듭니다.
    }
  }

  return result;
}


