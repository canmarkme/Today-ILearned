let input = [
  45, 125
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}

function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}