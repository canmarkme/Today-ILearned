function answer(s) {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (s[left] !== s[right]) {
      const splS1 = [...s];
      const splS2 = [...s];

      splS1.splice(right, 1);
      splS2.splice(left, 1);

      if (splS1.join('') === splS1.reverse().join('') || splS2.join('') === splS2.reverse().join('')) {
        return 1;
      }
      return 2;
    }
    left++;
    right--;
  }
  return 0;
}

function solution(arr) {
  const result = [];

  for (const s of arr) {
    result.push(answer(s));
  }

  return result;
}

console.log(solution(['abba', 'summuus', 'xabba', 'xabbay', 'comcom', 'comwwmoc', 'comwwtmoc']));

/** function solution(arr) {
  const result = [];

  function answer(s) {
    let left = 0;
    let right = s.length - 1;

    if (s === [...s].reverse().join("")) return 0;

    while (left <= right) {
      if (s[left] !== s[right]) {
        let splS1 = [...s];
        let splS2 = [...s];

        splS1.splice(right, 1);
        splS2.splice(left, 1);

        if (
          splS1.join("") === splS1.reverse().join("") ||
          splS2.join("") === splS2.reverse().join("")
        ) {
          return 1;
        } else {
          return 2;
        }
      }
      left++;
      right--;
    }
  }

  arr.forEach((a) => result.push(answer(a)));

  return result;
} */
