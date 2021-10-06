let input = [
  "abcde",
  "qwer"
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}

function solution(s) {
  return Math.round(s.length / 2) % 2 ? s[Math.round(s.length / 2) - 1] : s[Math.round(s.length / 2) - 1] + s[Math.round(s.length / 2)];
}