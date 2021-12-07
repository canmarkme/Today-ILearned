if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this[this.length - 1];
  };
}

if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length == 0;
  };
}

// 강사님 방법) 스택 O(n)
// 자신 보다 긴 기린이 나오기 전까지의 기린을 스택에 차곡차곡
// 비교하는 기린 사이 몇 마리가 있는지 기린의 개수는(n-1)
// 마지막 스택을 확인하기 위해 마지막 값 뒤에 가장 큰 값을 넣어줍니다.
function answer(giraffe) {
  let result = 0;
  let stack = [];
  giraffe.push(Number.MAX_SAFE_INTEGER);

  for (let i = 0; i < giraffe.length; i++) {
    // 현재 기린 키보다 최상단 키(stack.peek()["h"])가 낮으면 높이 계산
    while (!stack.isEmpty() && stack.peek()['h'] < giraffe[i]) {
      result += i - stack.pop()['i'] - 1;
    }
    stack.push({ h: giraffe[i], i: i });
  }
  return result;
}

// 정민이 방법) 탐색 O(n^2)
/*
function answer(giraffe) {
  let result = 0;

  for (let i = 0; i < giraffe.length; i++) {
    for (let j = i + 1; j < giraffe.length; j++) {
      if (giraffe[i] >= giraffe[j]) {
        result++;
      } else {
        break;
      }
    }
  }

  return result;
}
*/

let input = [
  [10, 3, 7, 4, 12, 2],
  [7, 4, 12, 1, 13, 11, 12, 6],
  [20, 1, 19, 18, 15, 4, 6, 8, 3, 3],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
