const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let X = fs.readFileSync(filePath).toString().trim();
let counter = 0;

while (X > 0) {
  counter++;
  X = X - counter;
}

if (counter % 2 === 0) {
  console.log(`${counter + X}/${1 + -X}`);
} else {
  console.log(`${1 + -X}/${counter + X}`);
}