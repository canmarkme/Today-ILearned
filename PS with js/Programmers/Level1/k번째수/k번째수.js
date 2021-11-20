let input = [
  [1, 5, 2, 6, 3, 7, 4],
  [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
];


process.stdout.write(`#1`);
console.log(solution(input[0], input[1]));

// array: [1, 5, 2, 6, 3, 7, 4]
// commands: [[2, 5, 3], [4, 4, 1], [1, 7, 3]]



function solution(array, commands) {
  const answer = [];

  for (let i = 0; i < commands.length; i++) {
    const newArr = array.slice(commands[i][0] - 1, commands[i][1]);
    newArr.sort((x, y) => x - y);
    answer.push(newArr[commands[i][2] - 1]);
  }
  return answer;
}


/*
// 강사님 방법) Map 이용

function solution(array, commands) {
  return commands.map((command) => {
    const [start, end, position] = command;  // 초기화
    return array.slice(start - 1, end).sort((x, y) => x - y)[position - 1];
  });
}
*/