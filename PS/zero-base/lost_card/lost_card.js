
let input = [
  [1, 7, 10],
  [3, 8, 18],
  [2, 5, 11],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}

function answer(a, b, c) {
  let number = 0;

  // sort
  num = [a, b, c];
  num.sort((x, y) => x - y);

  // 1. 등차(d) 값 찾기
  let d = 0;    //d는 등차가 누적된 값
  for (let i = 1; i < num.length; i++) {
    d += num[i] - num[i - 1];     // 다음값 - 현재값을 해야돼서 i=1부터 시작합니다. 
  }
  d /= num.length;

  // 2. 빈 index 찾기
  let location = num[2] - num[1] > num[1] - num[0] ? 2 : 1; // 차이가 큰 쪽 인덱스를 반환

  // 3. 이전 값+ d
  number = num[0] + d * index;  // num[0]은 초항
  return number;
}


/*
1, 7, 10
사이 값: 6 + 3 = 9
등차: 9/3 = 3
*/

