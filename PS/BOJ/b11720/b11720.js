const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
console.log(input[1].split('').map(value => +value).reduce((prev, curr) => prev += curr, 0));