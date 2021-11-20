const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let newArray = [];

input.forEach(value => {
  let num = value % 42;

  if (newArray.indexOf(num) === -1) {
    newArray.push(num);
  }
});

console.log(newArray.length);