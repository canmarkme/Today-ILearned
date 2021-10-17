
// 괄호 연산은 스택으로 많이 해결합니다.
// 괄호 매핑되는 것 끼리 짝을 이룹니다.
// 시작 괄호와 끝나는 괄호와 매핑
// 마지막 시작 괄호와 처음 끝나는 괄호와 매핑

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

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      stack.push(i);
    } else if (str[i] == ")") {
      // "(" < ")" 인 경우
      if (stack.isEmpty()) {
        return [];
      }

      result.push([stack.pop(), i]);
    }
  }

  // "(" > ")" 인 경우
  if (!stack.isEmpty()) {
    return [];
  }

  return result;
}



let input = [
  "(a+b)",
  "(a*(b+c)+d)",
  "(a*(b+c)+d+(e)",
  "(a*(b+c)+d)+e)",
  "(a*(b+c)+d)+(e*(f+g))",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}