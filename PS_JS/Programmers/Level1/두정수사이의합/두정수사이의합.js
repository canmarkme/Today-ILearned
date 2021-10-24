let input = [
  [3, 5],
  [3, 3],
  [5, 3]

];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i][0], input[i][1]));
}


// 강사님 방법 2) 가우스 공식 O(1)
// 3, 4, 5, 6
// 각 끝 수를 더하면 같은 값이 나옵니다.
// 공식) 양 끝값 더하기 * 요소 개수 / 2
//       요소 개수는 끝 값과 첫 값을 빼고 +1한 값입니다. 
// 예시) (3 + 6) * 4 / 2 = 18
function solution(a, b) {
  return (a + b) * (Math.abs(a - b) + 1) / 2;
}


// 강사님 방법 1) for문 사용 O(n)
/*
function solution(a, b) {
  let answer = 0;

  // 조건 a < b 로 만들어주기!
  if (a > b) [a, b] = [b, a];  // a와 b 값 swap

  for (let i = a; i <= b; i++) {
    answer += i;
  }
  return answer;
}
*/



// 정민이 방법
/*
function solution(a, b) {
  let answer = 0;
  let max = 0;
  console.log(a, b);

  if (a < b) {
    min = a;
    max = b;
  } else if (a > b) {
    max = a;
    min = b;
  }


  for (let i = min; i <= max; i++) {
    answer += i;
  }

  return answer;
}
*/


