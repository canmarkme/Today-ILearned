
let input = [
  "RE: Request documents",
  "[Advertisement] free mobile!",
  "50% off this week (advertising)"
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

function answer(matter) {
  let str = "";
  let result = "";
  str = matter.toLowerCase();

  // 방법 1 indexOf() 함수
  // result = str.indexOf("advert") != -1 ? true : false;

  // 방법 2 includes() 함수
  result = str.includes("advert");

  return result;
}


