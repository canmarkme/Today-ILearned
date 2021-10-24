let input = [
  [3, 1, 2, 3],
  [3, 3, 3, 2, 2, 4],
  [3, 3, 3, 2, 2, 2]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}


function solution(num) {
  var answer = 0;

  // 1. 폰켓몬 뽑는 개수
  let pickNum = num.length / 2;

  // 2. 폰켓몬 종류 개수
  // 중복 제거
  //let overlap = new Set(num).size;       // Set 방법 1
  let overlap = [...new Set(num)].length;  // Set 방법 2

  // return 폰켓몬 종류 개수 > 뽑을 수 있는 개수 ? 뽑을 수 있는 개수 : 폰켓몬 종류 개수;
  return overlap > pickNum ? pickNum : overlap;
}