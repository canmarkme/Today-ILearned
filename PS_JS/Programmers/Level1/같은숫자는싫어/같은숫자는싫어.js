let input = [
  [1, 1, 3, 3, 0, 1, 1],
  [4, 4, 4, 3, 3]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}


// 강사님 방법 2) for문의 if를 filter로 쓸 수 있습니다. 
function solutio  return arr.filter((v, i) => v != arr[i + 1]);
}


// 강사님 방법 1)
// 인접 중복된 숫자만 제거하기 때문에 Set을 사용할 수 없습니다.
function solution(arr) {
  let answer = [];
  console.log();

  // 1. 인접한 이전 숫자와 현재 숫자가 같은 숫자인가?
  //    같으면 자신을 remove. 최종적 숫자가 살아남는다. push
  for (let i = 0; i < arr.length - 1; i++) {  // 마지막 요소는 i+1이 없기 때문에 length-1을 합니다.
    if (arr[i] != arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  answer.push(arr[arr.length - 1]);     // 마지막 요소는 충돌할 요소가 없으니 push 해줍니다.

  return answer;
}