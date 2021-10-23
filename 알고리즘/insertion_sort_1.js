
// 삽입 정렬
// 1. 먼저 범위를 한정시켜놓고 정렬해놓습니다. (노란색 부분)
// 2. 새로운 요소를 삽입합니다. 
// 3. 2번 요소를 정렬합니다. 

let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};

let insertionSort = function (arr, compare) {
  for (let i = 1; i < arr.length; i++) {    // i=0은 정렬되었음
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {    // 값 shift를 위해 증감식을 j--로 합니다.
      arr[j + 1] = arr[j];

      // tmp과 arr[j]비교해 tmp가 더 큰건 arr[j]와 값이 같으니 break
      if (compare(tmp, arr[j])) {
        break;
      }
    }

    arr[j + 1] = tmp;   // 작은 값 = tmp
  }
};


/* test code */
let init_array = [6, 5, 1, 3, 2, 4];
let array;
let sorting = [insertionSort];
let order = [ascending, descending];
for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(sorting[i].name, order[j].name);
    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
}
