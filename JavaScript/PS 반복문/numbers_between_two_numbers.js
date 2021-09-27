let input = [
  [3, 7],
  [8, 3],
  [12, 10]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i][0], input[i][1]));
}

function solution(x, y) {
  let answer = [];

  if (x > y) {
    let t = x;
    x = y;
    y = t;
  }

  for (x; x <= y; x++) {
    answer += x;
  }
  return answer;
}