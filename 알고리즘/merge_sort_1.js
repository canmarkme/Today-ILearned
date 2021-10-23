
// m: middleIndex
let mergeSort = function (arr, compare) {

  // 1. 재귀 종료 조건
  if (arr.length === 1) return arr;

  let m = (arr.length / 2).toFixed(0);
  let left = mergeSort(arr.slice(0, m), compare);
  let right = mergeSort(arr.slice(m), compare);
  let i = 0;
  let j = 0;
  let k = 0;

  // A. 왼쪽배열과 오른쪽 배열 함께 정렬
  while (i < left.length && j < right.length) {
    arr[k++] = compare(left[i], right[j]) ? right[j++] : left[i++];
  }


  // A-1. A는 끝났지만 left 배열은 있는 경우
  while (i < left.length) arr[k++] = left[i++];
  // A-2. A는 끝났지만 right 배열은 있는 경우
  while (j < right.length) arr[k++] = right[j++];
  return arr;
};


let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};



/* test code */
let init_array = [6, 5, 1, 3, 2, 4];
let array;
let sorting = [mergeSort];
let order = [ascending, descending];
for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(sorting[i].name, order[j].name);
    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
}