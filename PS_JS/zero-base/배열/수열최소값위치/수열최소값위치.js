
let input = [
  [5, 2, 10, 2],
  [4, 5, 7, 4, 8],
  [12, 11, 11, 16, 11, 12]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

function answer(nums) {
  let result = [];
  let min = Number.MAX_SAFE_INTEGER;     // 최솟값을 찾기 때문에 가장 큰 값으로 초기화 합니다.

  // 1. 최솟값 찾기
  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i];
    }
  }

  // 2. 최솟값에 해당하는 위치 index

  // 메서드 사용
  for (let i = 0; i < nums.length; i++) {
    if (min == nums[i]) {
      result.push(i);
    }
  }


  // 메서드 no사용
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (min == nums[i]) {
      result[count++] = i;

      // 한 줄로 줄입니다.
      /*
      result[count] = i;
      count++;
      */

    }
  }


  return result;
}


