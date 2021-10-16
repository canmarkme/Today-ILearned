
let input = [
  [1, 2, 3],
  [3, 2, 1],
  [3, 1, 2]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

function answer(nums) {

  let result = [];
  for (let i = 1; i <= 3; i++) {
    result[i - 1] = i;
  }


  console.log(result);
  console.log(a);
  let a = nums.sort((x, y) => x - y);

  return a == result ? true : false;
}


