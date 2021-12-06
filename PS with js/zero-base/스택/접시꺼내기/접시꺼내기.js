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
  const result = [];
  const stack = [];
  let dishIndex = 0;

  // 1. 접시의 순서 sorting
  const dish = str.split('').sort().join('');

  // 2. 꺼낼 접시가 세척기 안에 있는 알파벳보다 작을 때까지 push()
  for (let i = 0; i < str.length; i++) {
    while (stack.isEmpty() || stack.peek() < str[i]) {
      stack.push(dish[dishIndex++]);
      result.push(0);
    }

    // 순회가 끝났음에도 불구하고, stack이 비어있거나 top이 자신보다 클 때
    if (stack.isEmpty() || stack.peek() > str[i]) {
      return [];
    }

    // 최상단 접시와 자신의 문자열이 같은 상황
    stack.pop();
    result.push(1);
  }

  return result;
}

const input = ['bacd', 'dabc', 'edcfgbijha'];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
