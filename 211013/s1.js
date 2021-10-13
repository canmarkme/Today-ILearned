
function solution(n) {
  let numOne = 0;  // 1의 개수 차곡차곡

  for (let i = 0; i <= n; i++) {
    let bi = i.toString(2);

    for (let j = 0; j < bi.length; j++) {
      if (bi[j] === "1") {
        numOne = numOne + 1;
      }
    }
  }

  return numOne;
}

let n = 8;
solution(n);