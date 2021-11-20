let input = [
  "try hello world"
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}

function solution(s) {
  let answer = "";
  let arr = [];
  arr = s.split(' ');

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      answer += j % 2 ? arr[i].charAt(j).toLowerCase() : arr[i].charAt(j).toUpperCase();
    }

    if (i < arr.length - 1) answer += ' ';
  }
  return answer;
}