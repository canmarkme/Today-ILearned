function count(string, char) {
  return string.match(new RegExp(char, 'g')).length;
}

const input = [['COMPUTERPROGRAMMING', 'R']];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(count(input[i][0], input[i][1]));
}
