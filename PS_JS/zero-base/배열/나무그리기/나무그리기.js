
let input = [
  3, 5, 7
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// 강사님 방법
// function answer(height) {
//   let str = "\n";


//   for (let i = 0; i < height; i++) {

//     // 1. 공백 처리 ''
//     for (let j = 0; j < height - i - 1; j++) {
//       str += " ";
//       //str += "🤍";
//     }

//     // 2. "*" 은 2n+1
//     for (let j = 0; j < 2 * i + 1; j++) {
//       str += "*";
//     }

//     // 3. 개행 문자 추가
//     str += "\n";
//   }

//   return str;
// }


// 이승연 수강생 방법
function answer(height) {
  let str = "\n";

  for (let i = 1; i < height + 1; i++) {
    const whiteSpace = " ".repeat(height - i);
    const numStars = "*".repeat(2 * i - 1);
    str += `
    ${whiteSpace}${numStars}${whiteSpace}`;

  }
  return str;

}