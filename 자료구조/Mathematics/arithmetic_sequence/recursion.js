let result;

function recursive(a, d, n) {
  // 멈출 조건
  if (n == 1) return a;

  // 반복 코드
  return recursive(a, d, n - 1) + d;
}

// number: 5 recursive(a, d, 4) + 2
// number: 4 recursive(a, d, 3) + 2
// number: 3 recursive(a, d, 2) + 2
// number: 2 recursive(a, d, 1) + 2
// number: 1 -> 3
// result: 11

result = recursive(3, 2, 5);
console.log(result);
