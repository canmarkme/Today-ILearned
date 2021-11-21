function replaceAtoSharp(string) {
  return string.replace(/A/g, '#');
}

const input = ['BANANA'];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(replaceAtoSharp(input[i]));
}
