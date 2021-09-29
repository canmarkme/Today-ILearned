
let input = [
  [1, 2, 3, 4],
  [-1, 6, "hello", -15],
  ["apple", "banana", "mango"]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
/*
function answer(matter) {
  let result = [];

  // 방법 1 for문 감소
  
  for (let i = matter.length - 1; i >= 0; i--) {
    result.push(matter[i]);
  }
  

  return result;
}
*/
// 방법 2 for문 1/2 loop. 양쪽 값 swap
function answer(matter) {
  for (let i = 0; i < matter.length / 2; i++) {
    let temp = matter[i];
    matter[i] = matter[matter.length - 1 - i];
    matter[matter.length - 1 - i] = temp;
  }
  return matter;
}

