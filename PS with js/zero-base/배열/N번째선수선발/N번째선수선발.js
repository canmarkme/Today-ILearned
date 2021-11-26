function solution(arr, num) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      result.push(arr[i][j]);
    }
  }
  result.sort((a, b) => a - b);

  return result[num - 1];
}

console.log(
  solution(
    [
      [1, 3, 8],
      [8, 9, 22],
      [12, 44, 90],
    ],
    6
  )
);
