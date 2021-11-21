function countUpperCase(string) {
  return string.match(/[A-Z]/g).length;
}

const input = ['KoreaTimeGood'];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(countUpperCase(input[i]));
}
