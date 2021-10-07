
// solution();

// function solution() {
//   var answer = 0;
//   let s = '174771177';
//   let values = s.split('');
//   let newArr = 0;

//   for (let i = 0; i < values.length; i++) {
//     for (let j = i+1; j < values.length; j++) {

//     }

//   }



//   return answer;
// }


// 중복 요소 제거
const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
let a = 0;
const newArr = [];
const result = values.reduce((acc, cur, i, values) => {
  // 순회 중인 요소의 인덱스가 자신의 인덱스라면 처음 순회하는 요소다.
  // 이 요소만 초기값으로 전달받은 배열에 담아 반환한다.
  // 순회 중인 요소의 인덱스가 자신의 인덱스가 아니라면 중복된 요소다.
  if (values.indexOf(cur) != i) {
  }
  return acc;
}, []);

console.log(result);