const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const result = [];
const xArr = [];
const yArr = [];

for (const spots of input) {
  const spot = spots.split(' ').map(value => +value);
  xArr.push(spot[0]);
  yArr.push(spot[1]);
}

xArr[0] === xArr[1] ? result.push(xArr[2]) : xArr[0] === xArr[2] ? result.push(xArr[1]) : result.push(xArr[0]);
yArr[0] === yArr[1] ? result.push(yArr[2]) : yArr[0] === yArr[2] ? result.push(yArr[1]) : result.push(yArr[0]);

console.log(result.join(' '));
