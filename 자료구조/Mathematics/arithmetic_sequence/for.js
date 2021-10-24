// ********** 등차수열 **********
// a + (n - 1) * d;
// a : 첫항, 초항
// d : 공차
// n : 수열의 개수



let result;

// 첫 항, 간격(공차), 수열의 개수 
function forloop(a, d, n) {
  let acc = 0;    // 각각요소 등차값 판단 함수 5번째 요소가 저장되는 곳

  // 3 > 5 > 7 > 9
  for (let i = 1; i <= n; i++) {
    if (i == 1) {
      acc += a;

    } else {
      acc += d;   // 공차
    }

    console.log(i, acc);
  }
  return acc;

}

result = forloop(3, 2, 5);
console.log(result);