let input = [
  "abcde",
  "qwer"
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}

function solution(s) {
  return s.slice(parseInt((s.length - 1) / 2), Math.round((s.length + 1) / 2));// 강사님 방법 2

  /*
    slice(start, end)
    Odd 일 때, start: (5-1)/2 = parseInt(2)  end: (5+1)/2 = Round(3)  그래서  s.slice(2,3) 
    Even일 때, start: (4-1)/2 = parseInt(1)  end: (4+1)/2 = Round(3)  그래서  s.slice(1,3) 
  */

  return s.substr(Math.round(s.length / 2) - 1, s.length % 2 == 0 ? 2 : 1);  // 강사님 방법 1
  return Math.round(s.length / 2) % 2 ? s[Math.round(s.length / 2) - 1] : s[Math.round(s.length / 2) - 1] + s[Math.round(s.length / 2)];  // 정민이 방뻡
}
