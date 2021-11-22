function isEqualDate(days) {
  const day1 = days.shift();
  const day2 = days.shift();
  return day1.getTime() === day2.getTime();
}

const input = [
  [new Date('2021/07/24'), new Date('2021/07/24')],
  [new Date('2021/07/24'), new Date('2022/07/2')],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(isEqualDate(input[i]));
}
