
let input = [
  [[2, 7, 11, 15], 9],
  [[3, 2, 4], 6],
  [[3, 3], 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

function answer(nums, target) {

  // 강사님 방법 O(n)
  let map = {};   // key, value

  for (let i = 0; i < nums.length; i++) {

    // key 찾기
    if (map[target - nums[i]] != undefined) {
      return [map[target - nums[i]], i];
    }

    map[nums[i]] = i;
    console.log(map);
  }


  // 정민이 방법 O(n^2)
  /*
  let result = [];
 
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
        
      }
    }
  }
  */
  return [];
}