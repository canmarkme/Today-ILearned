let input = [
  [6, 10, 2],
  [3, 30, 34, 5, 9]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}

function solution(numbers) {
  // '문자열수'를 만들려고 문자열로 만듭니다.
  const answer = numbers.map(value => value + '').sort((a, b) => (b + a) - (a + b)).join('');
  console.log(answer);

  return answer[0] === '0' ? '0' : answer;
}