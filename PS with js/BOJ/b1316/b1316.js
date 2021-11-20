const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const charN = input.shift();
let count = 0;

for (let i = 0; i < charN; i++) {
  const word = input[i];
  const letter = [];    // 처음 발견된 글자를 넣는 배열
  let isGroupWordCheck = true;

  for (let k = 0; k < word.length; k++) {
    if (letter.indexOf(word[k]) === -1) {
      letter.push(word[k]);
      console.log(letter);

    } else {
      // word[k]가 letter 배열에 존재하고 끝 글자와 다르다는 의미는
      // 이전에 나왔던 글자이기 때문에 (⭐ TOB)
      if (letter.indexOf(word[k]) !== letter.length - 1) {
        isGroupWordCheck = false;
        break;
      }
    }
  }


  if (isGroupWordCheck) {
    count += 1;
  }
}

console.log(count);