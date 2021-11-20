let input = [4, 5, 6];
//let input = [4];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}


function solution(n) {
  const result = [];
  let direction = 1;  // 방향 전환
  let r = -1;         // 1행을 n칸 가려면
  let c = 0;
  let newC = 0;       // 열(column)을 조작해서 새로운 '⊔'을 만들려고 사용

  // 1. 2차원 빈 배열 만들기
  for (let i = 0; i < n; i++) {
    result[i] = [];
  }

  let num = 0;  // 배열에 들어갈 값

  // 2. 반복문 구현
  while (true) {
    c = newC;  // '⊔'

    for (let i = 0; i < n; i++) {
      r += direction;
      result[r][c] = ++num;
    }

    n--;

    for (let j = 0; j < n; j++) {
      c += direction;
      result[r][c] = ++num;
    }

    n--;
    direction *= -1;    // direction = -1

    for (let i = 0; i < n; i++) {
      r += direction;
      result[r][c] = ++num;
    }

    n--;
    direction *= -1;    // direction = 1
    newC++;
    if (n <= 0) break;
  }

  return result.flat();
}