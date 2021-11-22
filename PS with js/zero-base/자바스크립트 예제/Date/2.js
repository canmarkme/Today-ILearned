function getDay(date) {
  const today = new Date(date);
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const day = dayNames[today.getDay()]; // getDay 메서드는 해당 요일(0 ~ 6)을 나타내는 정수를 반환한다.
  return `${day}`;
}

const input = ['2021-07-24', '2021-07-25', '2021-07-26'];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(getDay(input[i]));
}
