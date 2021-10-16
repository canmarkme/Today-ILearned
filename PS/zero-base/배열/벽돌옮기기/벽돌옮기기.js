
let input = [
  [5, 2, 4, 1, 7, 5],
  [12, 8, 10, 11, 9, 5, 8],
  [27, 14, 19, 11, 26, 25, 23, 15]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

function answer(nums) {
  let result = 0;
  let avg = nums.reduce((prev, curr, index, { length }) => {
    return index === length - 1 ? (prev + curr) / length : prev + curr;
  }, 0);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > avg) {
      result += nums[i] - avg;
    }
  }

  return result;
}