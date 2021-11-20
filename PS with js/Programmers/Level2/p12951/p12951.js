let input = [
  "3people unFollowed me",
  "for the last week"
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}

function solution(s) {
  return s.split(" ").map(value => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()).join(" ");
}