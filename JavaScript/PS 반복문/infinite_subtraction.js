let input = [
  [9, 3],
  [6, 3],
  [13, 7]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i][0], input[i][1]));
}

function solution(s, e) {
  let sequence = [];
  sequence.push(s);
  sequence.push(e);
  let i = 0;

  while (true) {
    if ((sequence[i] - sequence[i + 1]) < 0) break;
    sequence.push(sequence[i] - sequence[i + 1]);
    i++;
  }

  return sequence;
}