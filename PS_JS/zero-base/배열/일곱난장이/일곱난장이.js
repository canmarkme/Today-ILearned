
let input = [
  [1, 5, 6, 7, 10, 12, 19, 29, 33],
  [25, 23, 11, 2, 18, 3, 28, 6, 37],
  [3, 37, 5, 36, 6, 22, 19, 2, 28]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}


function answer(dwarf) {
  let result = [];
  let sum = 0;
  let faker = [];

  // 1. 9명(배열 총 합) = 7명(도합 100이어야..) + 2명(faker)
  //    9명 - 7명

  // 9명의 값
  for (let i = 0; i < dwarf.length; i++) {
    sum += dwarf[i];

  }

  sum -= 100;   // faker 2명에 대한 배지 값


  // 2. for 두 요소의 합이 faker 2명에 대한 합 숫자와 같은지 비교 
  // i를 dwarf[0] 그 다음 요소 dwarf[1] 부터 끝까지 j에서 찾습니다.
  // 나오지 않으면 i++ 해서 dwarf[1]이 i가 되고 dwarf[2] 부터 끝까지 j로 faker 두 명을 찾습니다.
  for (let i = 0; i < dwarf.length; i++) {
    for (let j = 0; j < dwarf.length; j++) {
      if (sum == dwarf[i] + dwarf[j]) {
        faker[0] = i;
        faker[1] = j;
        break;
      }
    }

    if (faker.length != 0) break;
  }

  // 3. faker 두 명을 제외하고 나머지 배지 값을 result로 반환합니다.
  let count = 0;
  for (let i = 0; i < dwarf.length; i++) {
    if (faker[0] != i && faker[i] != i) {
      result[count++] = dwarf[i];
    }
  }

  return result;
}


