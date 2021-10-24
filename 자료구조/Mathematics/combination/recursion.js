let input = [1, 2, 3, 4];     // 4C2
let count = 0;
let output = [];

// output에 들어갈 data 매개변수
function combination(arr, data, start, index, ratio) {
  if (start == ratio) {
    count++;
    console.log(data);
    return;
  }

  for (let i = index; arr.length - i >= ratio - start; i++) {
    data[start] = arr[i];
    combination(arr, data, start + 1, i + 1, ratio);
  }
}

combination(input, output, 0, 0, 2); // 세 번째 매개변수 index를 2로 지정해 0, 1, 2번까지 뽑는다.
console.log(count);