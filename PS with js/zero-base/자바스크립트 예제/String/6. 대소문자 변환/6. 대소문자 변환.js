/*
function toggleCase(string) {
  return string.replace(/./g, char => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()));
}
*/

const toggleCase = str =>
  str.replace(/([a-z]+)|([A-Z]+)/g, (_, lowerCase, upperCase) =>
    lowerCase ? lowerCase.toUpperCase() : upperCase.toLowerCase()
  );

const input = ['StuDY'];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(toggleCase(input[i]));
}
