const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

for (const newArr of input) {
  const numArr = newArr
    .split(' ')
    .map(num => (num * 1) ** 2)
    .sort((a, b) => a - b);

  const a = numArr.shift();
  const b = numArr.shift();
  const c = numArr.shift();

  if (a === 0 && b === 0 && c === 0) break;

  console.log(a + b === c ? 'right' : 'wrong');
}
