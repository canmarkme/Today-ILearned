let input = [
  "1 2 3 4",
  "-1 -2 -3 -4",
  "-1 -1"
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}

function solution(s) {
  const arr = s.split(" ").map(value => +value);
  // null을 명시적으로 써서 상관 없음을 나타냅니다.
  // {}, {name:1}, null 상관 없음
  return Math.min.apply(null, arr) + ' ' + Math.max.apply(null, arr);
}