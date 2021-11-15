let input = [
  5, 6, 5000
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}

function solution(N) {
  let answer = 0;
  while (N > 1) {
    if (N % 2 == 0) {
      N = (N / 2);
    } else {
      N = N - 1;
      answer++;
    }
  }
  return answer + 1;
}