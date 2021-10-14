
let input = [
  [[1], [2], [3]],
  [[1, 2], [3, 4], [5, 6, 7]],
  [[5, 1], [0.2, 4, 0.5], [3, 9]]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

function answer(matter) {
  let result = 1;

  for (value of matter) {
    for (items of value) {
      result *= items;
    }
  }

  return result;
}


