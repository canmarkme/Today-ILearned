
let input = [
  ["john", "alice", "alice"],                      // true, true, false
  ["Hello", "hello", "HELLO", "hello"],            // true, true, true, false
  ["kiwi", "banana", "mango", "kiwi", "banana"],   // true, true, true, false, false
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// 방법 1 filter()
/*
function answer(matter) {
  let result = [];

  result = matter.filter((value, index) => {
    // 요소가 배열 내에서 처음 나오는 요소인가
    return matter.indexOf(value) === index;
  });
  return result;
}
*/

// 방법 2 set()
function answer(matter) {
  let newArray = [];

  new Set(matter).forEach(function (value) {
    newArray.push(value);
  });
  return newArray;
}

// 방법 2 set(), from
function answer(matter) {
  let newArray = [];

  // iterable object를 from() 함수를 이용해 배열형태로 만듭니다.
  newArray = Array.from(new Set(matter));
  return newArray;
}