
let input = [
  [1, 2, 7],
  [2, 3, 10],
  [3, 5, 23]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}

function answer(a, d, n) {
  let index = -1;

  // 방법 1) 등차수열
  /*
  let num;
  for (let i = 1; ; i++) {
    num = a + d * (i - 1);

    if (num > n) {
      index = -1;
      break;
    }
 
    if (num == n) {
      index = i;
      break;
    }
  }
  */

  // 방법 2 if문
  if ((n - a) % d == 0) {
    index = (n - a) / d + 1;
  } else {
    index = -1
  }

  return index;
}


