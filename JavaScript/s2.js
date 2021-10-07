solution([-2, 5, -3, 6, 8, -1, -5, 3]);

function solution(fruits) {
  let n = fruits.length;
  let max = fruits[0];
  for (let i = 1; i < n; i++) {
    if (fruits[i - 1] > 0 && fruits[i] + fruits[i - 1] > 0) {
      fruits[i] += fruits[i - 1];
    }

    if (max < fruits[i]) {
      max = fruits[i];
    }
  }
  return max;
}