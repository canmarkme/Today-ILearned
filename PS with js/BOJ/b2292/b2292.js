const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();
let range = 1, block = 1;

// 둘러싼 방의 개수는 6, 12, 18, 24...로 (+6)증가합니다.
// 1, (2~)7, (8~)19, (20~)37...
while (block < input) {
  block += 6 * range;
  range++;
}

console.log(range);