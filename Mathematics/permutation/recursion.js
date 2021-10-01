let input = ["a", "b", "c"];
let count = 0;

// 재귀함수(배열, 시작위치, 인덱스)
function permutation(arr, start, ratio) {

  // 1. 재귀함수를 멈추는 조건 
  if (start == ratio) {             // 종료지점
    count++;
    console.log(arr.join(" "));
    return;                         // 재귀함수 break
  }

  // 2. 재귀함수를 돌면서 변경되는 부분(메인 로직)
  // 0이 아닌 start를 초기 값으로 선언하여 permutation(arr, start + 1, r) 
  // 호출 시 arr = start로 중복이 안되게 도모함.
  for (let i = start; i < arr.length; i++) {
    [arr[start], arr[i]] = [arr[i], arr[start]];  // swap
    permutation(arr, start + 1, ratio);
    [arr[start], arr[i]] = [arr[i], arr[start]];  // swap 복귀( 원상 복귀)

  }
}


permutation(input, 0, 2); // 세 번째 매개변수 r를 2로 지정해 0, 1, 2번까지 뽑는다.
console.log(count);
