function solution(brown, yellow) {
  const answer = [];
  const sum = brown + yellow;

  for (let height = 3; height <= brown; height++) {
    if (sum % height === 0) {
      const width = sum / height;

      if ((height - 2) * (width - 2) === yellow) return [width, height];
    }
  }
  return answer;
}

const input = [
  [10, 2],
  [8, 1],
  [24, 24],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i][0], input[i][1]));
}
