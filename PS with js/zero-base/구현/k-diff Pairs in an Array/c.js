function solution(nums, k) {
  let answer = [];

  if (k !== 0) {
    const set = [...new Set(nums.map(value => Math.abs(value)))];
    const addK = [...new Set(nums.map(value => Math.abs(value) + k))];
    answer = set.filter(x => addK.includes(x));
  } else {
    const overlap = nums.reduce((accu, curr) => {
      accu[curr] = (accu[curr] || 0) + 1;
      return accu;
    }, {});

    for (const [num, count] of Object.entries(overlap)) {
      if (count === 2) answer.push(+num);
    }
  }

  return answer.length;
}

console.log(solution([3, 1, 4, 1, 5], 2));
// console.log(solution([1, 2, 3, 4, 5], 1));
// console.log(solution([1, 3, 1, 5, 4], 0));
// console.log(solution([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3)); // 0
// console.log(solution([-1, -2, -3], 1)); // 0
