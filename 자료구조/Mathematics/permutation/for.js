let input = ["a", "b", "c"];
let count = 0;

function permutation(arr) {
  // for i -> 첫 번째 index 위치시킬 요소 [i, 0, 0]
  for (let i = 0; i < arr.length; i++) {

    // for j -> 두 번째 index 위치시킬 요소 [i, j, 0]
    for (let j = 0; j < arr.length; j++) {
      if (i == j) continue;

      // for k -> 세 번째 index 위치시킬 요소 [i, j, k]
      for (let k = 0; k < arr.length; k++) {
        if (i == k) continue;
        if (j == k) continue;

        console.log(arr[i], arr[j], arr[k]);
        count++;
      }
    }
  }
}

permutation(input);
console.log(count);