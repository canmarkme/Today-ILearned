let input = [
  [1, 5, 2, 6, 3, 7, 4],
  [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
];


for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[0], input[1]));
}

// array: [1, 5, 2, 6, 3, 7, 4]
// commands: [[2, 5, 3], [4, 4, 1], [1, 7, 3]]


// 강사님 방법 1)
/*
function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    // 1. array 자르기
    // slice()를 이용해 index를 반환합니다. 
    let temp = array.slice(commands[i][0] - 1, commands[i][1]);


    // 2. 1번 배열 정렬
    temp.sort((x, y) => x - y);

    // 3. 2번 배열 중 k번째 숫자 반환 후 배열에 push
    answer.push(temp[commands[i][2] - 1]);
  }


  return answer;
}

*/

// 강사님 방법 2) Map 이용

function solution(array, commands) {
  return commands.map((command) => {
    const [start, end, position] = command;  // 초기화
    return array.slice(start - 1, end).sort((x, y) => x - y)[position - 1];
  });
}