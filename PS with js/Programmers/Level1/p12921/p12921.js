let input = [
  10, 5
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}

function solution(n) {
  let answer = 0;
  const newArr = [];

  for (let i = 2; i <= n; i++) newArr[i] = i;
  for (let i = 2; i <= n; i++) {
    if (newArr[i] === 0) continue;

    for (let j = i + i; j <= n; j += i) {
      newArr[j] = 0;
    }
  }
  answer = newArr.filter(value => value !== 0).length;
  return answer;
}