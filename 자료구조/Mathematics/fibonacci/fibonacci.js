// 피보나치 수열
// 현재 값: 이전값과 이전전값을 더한 값

let result;

function recursive(n) {
  if (n == 1 || n == 0) {
    return n;
  }

  // f(n) = f(n-1) + f(n-2)
  return recursive(n - 1) + recursive(n - 2);
}

result = recursive(5);
console.log(result);

/*
f(5) = f(4) + f(3) = 5
f(4) = f(3) + f(2) = 3
f(3) = f(2) + f(1) = 2
f(2) = f(1) + f(0) = 1
f(1) -> 1
dept f(0)이 안끝남
f(0) -> 0
*/



