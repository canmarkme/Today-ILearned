let input = [
  [3, 20, 4]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[0][0], input[0][1], input[0][2]));
}

/*
price: 이용료
money: 자금
count: 놀이기구 뱅뱅 횟수
result: 남은 돈
*/


// 강사님 방법 1
function solution(price, money, count) {
  let total_price = 0;

  // 1. 전체이용료
  // i * price 하지 않고 i만 다 더한 answer를 마지막에 price와 곱합니다.(⭐ TOB)
  // total_price = (1+2+3+4) * price
  for (let i = 0; i < count; i++) {
    total_price += i;
    total_price *= price;
  }

  // 2. 남은돈
  return total_price > money ? total_price - money : 0;

}


// 강사님 방법 2) 가우스 공식 O(1)
function solution(price, money, count) {
  let total_price = 0;

  // 1. 전체이용료
  total_price = price * (((1 + count) * count) / 2) - money;     // 1부터 count까지 등차수열

  // 2. 남은돈
  return total_price > 0 ? total_price : 0;
}




// 정민이 방법
/*
function solution(price, money, count) {
  let answer = 0;
  let totla_price = 0;

  for (let i = 1; i <= count; i++) {
    totla_price = totla_price + (price * i);
  }

  if (money - totla_price >= 0) {
    answer = 0;
  } else {
    answer = Math.abs(money - totla_price);
  }
  return answer;
}
*/