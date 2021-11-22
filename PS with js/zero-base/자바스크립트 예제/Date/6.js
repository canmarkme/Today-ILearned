function diffDays(days) {
  const day1 = days.shift();
  const day2 = days.shift();
  const elapsedMSec = day2.getTime() - day1.getTime();
  const elapsedDay = elapsedMSec / 1000 / 60 / 60 / 24;
  return elapsedDay;
}

const input = [[new Date('2021/01/01'), new Date('2021/12/31')]];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(diffDays(input[i]));
}
