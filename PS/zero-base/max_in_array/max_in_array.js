
let input = [
  [1, 6, 5, 2, 3],
  [19, 41, 23, -4, 17],
  [-64, -27, -41, -33, -59]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

function answer(matter) {
  let max = matter[0];
  for (let i = 0; i < matter.length; i++) {
    if (matter[i] > max) max = matter[i];

  }
  return max;
}


