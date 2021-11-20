
let input = [
  [0, 1, 2, 2, 2, 7],
  [2, 1, 2, 1, 2, 1],
  [0, 1, 1, 5, 3, 6]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// 1. 각 index 별로 정해진 숫자(체스 게임을 하기 위한 기물의 개수)
// 2. 각 index 별로 정해진 숫자와 비교해서 얼마만큼 부족한지 혹은 더 많은지 계산하여 result 배열에 업데이트 
function answer(chess) {
  let result = [];

  let refer = [1, 1, 2, 2, 2, 8];
  let count = 0;

  for (let i = 0; i < chess.length; i++) {
    result[count++] = refer[i] - chess[i];
  }

  return result;
}


