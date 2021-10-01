let result;

function recursive(a, r, n) {
  // 멈출 조건
  if (n == 1) return a;

  // 반복 코드
  return recursive(a, r, n - 1) * r;
}

// number: 5 recursive(a, r, 4) * 2
// number: 4 recursive(a, r, 3) * 2
// number: 3 recursive(a, r, 2) * 2
// number: 2 recursive(a, r, 1) * 2
// number: 1 -> 3
// result: 48

result = recursive(3, 2, 5);
console.log(result);
