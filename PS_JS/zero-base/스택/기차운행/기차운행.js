
let input = [
  [1, 2, 3],
  [3, 2, 1],
  [3, 1, 2]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

function answer(train) {
  let stack = []; // 기차 플랫폼
  let num = 0;    // 기차수



  for (let i = 1; i <= train.length; i++) {

    // stack이 비었거나 stack 마지막 index 값이 train[i] 보다 작을 때 
    /**
      * train이 [3, 2, 1]인 경우
      * train[0] === 3 이고 stack: [1]
    */
    while (stack.length === 0 | stack[stack.length - 1] < train[i]) {
      stack.push(++num);
    }

    // 나갈 수 있는 상태
    if (stack[stack.length - 1] === train[i]) {
      stack.pop();

      // 나갈 수 없는 상태
    } else {
      return false;
    }
  }
}