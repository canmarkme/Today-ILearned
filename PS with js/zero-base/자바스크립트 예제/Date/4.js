function getFirstDayOfMonth(date) {
  const year = date.shift();
  const month = date.shift() + 1;
  return new Date(`${year}-${month}-1`).getDay();
}

const input = [
  [2021, 0],
  [2021, 11],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(getFirstDayOfMonth(input[i]));
}
