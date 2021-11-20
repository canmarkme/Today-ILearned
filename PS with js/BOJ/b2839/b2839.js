const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();
let bongJi5 = +input;
let bongJi3 = 0;

while (true) {
  if (bongJi5 % 5 === 0) {
    console.log(bongJi5 / 5 + bongJi3);
    break;
  }

  if (0 > bongJi5) {
    console.log(-1);
    break;
  }

  bongJi3++;
  bongJi5 -= 3;
}


// Write your code