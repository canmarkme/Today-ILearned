let input = [1, 2, 3, 4];     // 4C2
let count = 0;

function combination(arr) {
  // for -> 뽑는 개수 (2)
  // [참고] i = 3일 경우 j = 4가 되면 arr.length와 동일해서 두 번째 for문은 실행되지 않습니다 .
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      console.log(arr[i], arr[j]);
    }
  }
}

combination(input);
console.log(count);