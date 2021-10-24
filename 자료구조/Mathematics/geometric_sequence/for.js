// ********** 등비수열 **********
// a + (n - 1) * d;
// a : 첫항, 초항
// r : 공비
// n : 수열의 개수



let result;

// 첫 항, 간격(공비), 수열의 개수 
function forloop(a, r, n) {
  let acc = 1;    // 각각 요소 등차 값 판단 함수 5번째 요소가 저장되는 곳

  // 3 > 5 > 7 > 9
  for (let i = 1; i <= n; i++) {
    if (i == 1) {
      acc *= a;

    } else {
      acc *= r;   // 공비
    }

    console.log(i, acc);
  }
  return acc;

}

result = forloop(3, 2, 5);
console.log(result);