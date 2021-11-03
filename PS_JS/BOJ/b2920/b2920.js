const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');


// 오름차순 함수
function ascendingFn() {
  let isAscending = true;

  if (input[0] != 1) isAscending = false;


  for (let i = 1; i < input.length - 1; i++) {
    if (input[i] - input[i + 1] != -1) {
      isAscending = false;
      break;
    }
  }

  return isAscending;
}



// 내림차순 함수
function descendingFn() {
  let isDescending = true;

  if (input[0] != 8) isDescending = false;

  for (let i = 1; i < input.length - 1; i++) {

    if (input[i] - input[i + 1] != 1) {
      isDescending = false;
      break;
    }
  }

  return isDescending;

}

function solution() {
  if (ascendingFn()) {
    console.log('ascending');
  } else if (descendingFn()) {
    console.log('descending');
  } else {
    console.log('mixed');
  }
}

solution();