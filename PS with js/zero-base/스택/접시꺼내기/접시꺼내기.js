
if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this[this.length - 1];
  };
}

if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length == 0;
  };
}

function answer(str) {
  let result = [];
  let stack = [];
  let dish_index = 0;

  // 1. 접시의 순서 sorting
  let dish = str.split("").sort().join("");

  // 2. 꺼낼 접시가 세척기 안에 있는 알파벳보다 작을 때까지 push()
  for (let i = 0; i < str.length; i++) {
    // 예시) stack: [a,b,c] 이고 str[i]: d 인 경우
    while (stack.isEmpty() || stack.peek() < str[i]) {
      stack.push(dish[dish_index++]);
      result.push(0);
    }

    if (stack.isEmpty() || stack.peek() > str[i]) {
      return [];

      // 3. 최상단 접시와 비교
    } else {
      stack.pop();
      result.push(1);
    }
  }



  return result;
}


let input = [
  "bacd",
  "dabc",
  "edcfgbijha"
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
