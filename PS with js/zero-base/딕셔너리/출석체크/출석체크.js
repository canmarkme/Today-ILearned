function Dictionary(items = {}) {
  this.items = items;
}

Dictionary.prototype.has = function (key) {
  return this.items.hasOwnProperty(key);
};

Dictionary.prototype.set = function (key, value) {
  this.items[key] = value;
};

function solution(class1, class2) {
  const result = [];

  // class2에 대한 key/value 형태로 저장 -> 학생 있는지 없는지 확인
  const tmp = new Dictionary();
  for (let i = 0; i < class2.length; i++) {
    tmp.set(class2[i], true);
  }

  // class1 for class2 dictionary 학생 있는지 없는지 유무를 통해 빠르게 확인할 수 있음
  for (let i = 0; i < class1.length; i++) {
    if (tmp.has(class1[i])) {
      result.push(class1[i]);
    }
  }

  return result;
}

const input = [
  [
    ['Kali', 'Oliver', 'Naomi'],
    ['Oliver', 'Naomi', 'Maya'],
  ],

  [
    ['Roxy', 'Olga', 'Kara', 'Nana'],
    ['Oliver', 'Roxy', 'Kara', 'Nana', 'Maya'],
  ],

  [
    ['Roxy', 'Ravi', 'Nana', 'Rei', 'Karis', 'Mana', 'Naomi'],
    ['Olga', 'Nana', 'Rei', 'Naomi', 'Kali', 'Ravi', 'Kara'],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i][0], input[i][1]));
}
