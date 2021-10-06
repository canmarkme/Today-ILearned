let input = [
  [["sun", "bed", "car"], 1],
  [["abce", "abcd", "cdx"], 2]

];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i][0], input[i][1]));
}

function solution(strings, n) {
  console.log(strings, n);

  // stirng의 n번째 찾아서 sort해서 변수에 넣기 
  // 오름차순으로 정렬 

  var answer = 0;
  return answer;
}