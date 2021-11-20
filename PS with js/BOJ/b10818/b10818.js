const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let count = 0;

count = +input[0];
input = input[1].split(' ').map(value => +value);

input.sort((a, b) => a - b);
console.log(`${input[0]} ${input[count - 1]}`);
