// 두 번째 자리까지 반올림

let input = [
  [40, 130.0],
  [33, 130.0],
  [300, 300.0]
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}

function answer(withdraw, total) {
  let result;
  if (withdraw % 5 == 0 && withdraw + 0.5 < total) {
    result = total - withdraw - 0.5;
    console.log(result);
  } else {
    result = total;
  }
  return result;
}



//( % 5) 라면 continue;