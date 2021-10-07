solution(15);

function solution(n) {
  var answer = 0;
  function fn(current, sum) {
    if (sum === n) return true;
    if (sum > n) return false;
    return fn(current + 1, sum + current);
  } for (let i = 1; i <= n; i++) {
    if (fn(i, 0))
      answer++;
  }
  return answer;
}
