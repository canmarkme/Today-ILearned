function getLastDateOfMonth(date) {
  const year = date.shift();
  const month = date.shift() + 1;

  return new Date(year, month, 0).getDate();
}

const input = [
  [2021, 0],
  [2021, 1],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(getLastDateOfMonth(input[i]));
}
