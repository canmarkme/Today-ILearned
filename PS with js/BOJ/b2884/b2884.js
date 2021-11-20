const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  let input = line.split(" ");
  let H = Number(input[0]);
  let M = Number(input[1]);
  solution(H, M);

  function solution(H, M) {
    M -= 45;

    if (M < 0) {
      M += 60;
      H--;

      if (H === -1) {
        H = 23;
      }
    }

    console.log(H + " " + M);
  }
}).on("close", function () {
  process.exit();
});