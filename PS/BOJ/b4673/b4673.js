// 입력 없음

const N = 10000;

const chkArr = Array(N + 1).fill(true);     // 0 ~ 10000까지 셀프넘버 배열을 생성하고 배열 값을 true로 초기화합니다.

function solution(n) {
  let s = n;

  while (n) {
    s += n % 10;
    n = Math.floor(n / 10);
  }

  return s + n;
}

for (let i = 1; i <= N; i++) {
  const t = solution(i);
  if (t < N) {
    chkArr[t] = false;      // 셀프넘버가 아닌 수는 false
  }
}

for (let i = 1; i < N; i++) {
  if (chkArr[i]) console.log(i);
}

// Write your code
console.log();