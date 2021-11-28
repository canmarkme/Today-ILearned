function solution(answers) {
  const result = [];

  // 1. 각 수포자의 답안을 초기화합니다.
  const spj1 = [1, 2, 3, 4, 5];
  const spj2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const spj3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 2. 정답 배열에서 각 수포자의 배열 중 맞은 답만 추출해서 정답개수로 반환
  const check1 = answers.filter((a, i) => a === spj1[i % spj1.length]).length;
  const check2 = answers.filter((a, i) => a === spj2[i % spj2.length]).length;
  const check3 = answers.filter((a, i) => a === spj3[i % spj3.length]).length;

  // 3. 많이 맞은 사람
  const max = Math.max(check1, check2, check3);

  // 각자의 답안 개수가 가장 많이 맞은 답 개수와 같을 때 answer에 push
  if (check1 === max) result.push(1);
  if (check2 === max) result.push(2);
  if (check3 === max) result.push(3);

  return result;
}

let input = [
  [1, 2, 3, 4, 5],
  [1, 3, 2, 4, 2],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
