function toggleCase(string) {
  return string.replace(/./g, char => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()));
}

const input = ['StuDY'];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(toggleCase(input[i]));
}
