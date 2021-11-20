const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');

const telMap = {};
let telKey = '';
let charNum = 3;


// 'A'.charCodeAt(0) = 65
// 'Z'.charCodeAt(0) = 90
for (let i = 65; i <= 90; i++) {
  telKey += String.fromCharCode(i);

  if (telKey.length === 3 && i !== 'R'.charCodeAt(0) && i !== 'Y'.charCodeAt(0)) {
    telMap[telKey] = charNum;
    charNum++;
    telKey = '';

  } else if (telKey.length === 4) {
    telMap[telKey] = charNum;
    charNum++;
    telKey = '';
  }
}

const result = input.reduce((prev, curr) => {
  for (let key in telMap) {

    if (key.includes(curr)) {
      prev += telMap[key];
    }
  }
  return prev;
}, 0);

console.log(result);