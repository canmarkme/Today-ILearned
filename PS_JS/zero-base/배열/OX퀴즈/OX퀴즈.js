
let input = [
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 0]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}


// 1이면 1점, 연속한 1점인 경우 점수 추가 증가 
function answer(mark) {
  let result = 0;

  // 강사님 방법
  let score = 0;
  for (let i = 0; i < mark.length; i++) {
    if (mark[i] == 1) {
      result += ++score;
    } else {
      score = 0;
    }
  }
  /**
   * 0 일때, score(1)
   *         result(1)
   * 1 일때, score(0)
   *         result(1)
   * 2 일때, score(1)
   *         result(2)
   * 3 일때, score(2)
   *         result(4)
   * 4 일때, score(3)
   *         result(7)
   * 5 일때, score(0)
   *         result(7)
   * 6 일때, score(1)
   *         result(8)
   * 7 일때, score(2)
   *         result(10)
   */



  // 정민이 방법
  /*
  let plus = 1;
  for (let i = 0; i < mark.length; i++) {
    if (mark[i] == 1) {
      result++;
      if (mark[i - 1] == 1) {
        result += plus++;
      } else {
        plus = 1;
      }
    }
  }
  */

  return result;
}


