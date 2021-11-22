function formatDate(date) {
  return date.toISOString().substring(0, 10);
}

const input = [new Date('2021/07/24'), new Date('1900/1/4')];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(formatDate(input[i]));
}
