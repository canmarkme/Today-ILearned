function getLastDayOfMonth(date) {
  const year = date.shift();
  const month = date.shift() + 1;
  const lastdate = new Date(year, month, 0).getDate();
  return new Date(`${year}-${month}-${lastdate}`).getDay();
}

const input = [
  [2021, 0],
  [2021, 11],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(getLastDayOfMonth(input[i]));
}
