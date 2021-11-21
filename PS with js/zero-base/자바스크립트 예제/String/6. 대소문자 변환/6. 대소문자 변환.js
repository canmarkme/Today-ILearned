function upperToLower(match) {
  return match.toLowerCase();
}

function lowerToUpper(match) {
  return match.toUpperCase();
}
http://egloos.zum.com/sweeper/v/3064730
function toggleCase(string) {
  const str = string.replace(/.*?/g, 'U$1E');
  console.log(str);
}

const input = ['StuDY'];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(toggleCase(input[i]));
}
