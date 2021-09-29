
let input = [
  "2021-01-27", "2021-02-27", "2021-03-14"
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

function answer(matter) {
  let hangulDay = ["일", "월", "화", "수", "목", "금", "토"];
  let date = new Date(matter);
  let result = hangulDay[date.getDay()];

  return result;
}


