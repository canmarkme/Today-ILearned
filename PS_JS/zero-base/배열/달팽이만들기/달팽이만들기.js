
let input = [3, 5, 6];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

function answer(length) {
  let result = [];
  let num = 0;
  let direction = 1;    // 방향전환, 짝수(②, ④, ⑥)를 만나면 양수가 됩니다.
  let r = 0;
  let c = -1;    // 1열이 4칸을 가려면 c는 -1로 초기화 합니다.

  // 1. 2차원 배열 만들기
  for (let i = 0; i < length; i++) {
    result[i] = [];
  }

  // 2. 패턴 기반으로 반복문 구현
  //    1) length 길이만큼 시작해서 숫자를 채워줍니다.
  //    2) length - 1, 방향 전환, 2회
  //    3) length == 0, 프로그램 종료
  while (1) {
    for (let i = 0; i < length; i++) {
      c += direction;
      result[r][c] = ++num;
    }

    length--;

    if (length == 0) break;

    for (let j = 0; j < length; j++) {
      r += direction;
      result[r][c] = ++num;
    }
    direction *= -1;    // direction을 -1로 초기화
  }

  return result;
}


