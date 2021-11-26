/**
 * @param history {number[]}
 * @param infected {number}
 * @return {number[]}
 */

function solution(history, infected) {
  const answer = [];

  const startIdx = history.findIndex(value => value === infected);
  const endIdx = history.findIndex(value => value === -infected);

  // 1. 확진자보다 먼저 들어온 사람들
  const startArr = history.slice(0, startIdx);
  const prvPeople = startArr.reduce((acc, curr) => {
    console.log(acc);
    acc[Math.abs(curr)] = (acc[Math.abs(curr)] || 0) + 1;
    return acc;
  }, {});

  for (const [person, count] of Object.entries(prvPeople)) {
    if (count === 1) answer.push(+person);
  }

  // 2.확진자 사이 사람들
  const midPeople = history.slice(startIdx + 1, endIdx);

  for (const person of midPeople) {
    if (!answer.includes(Math.abs(person))) {
      answer.push(Math.abs(person));
    }
  }

  return answer.length > 0 ? answer.sort((a, b) => a - b) : [];
}

const input = [
  [[3, 2, -3, 1, -1, -2, 4, -4, 1, -1], 2],
  [[2, 4, 3, -3, 3, -2, 1, -3, -1, -4], 4],
  [[1, -1], 1],
  [[7, -7, 2, 5, 1, 4, 9, -9, -2, 3, -1, -5, 6, 10, -10, 7, -4, -6, 8, -7, 4, -3, 3, -8, -3, -4], 1],
  // [
  //   [
  //     10, 2, 14, 12, 13, 6, 9, -14, 4, 1, 11, 8, -10, 15, -11, -4, 3, -2, -15, -13, 7, 2, -7, 5, 7, -7, -2, -8, -3, -5,
  //     -6, -12, 5, -9, -5, -1,
  //   ],
  //   3,
  // ],
  // [
  //   [
  //     18, 12, 13, 11, 6, 15, -6, 19, 7, 5, 17, -5, -13, -11, 14, 2, -19, 16, -17, -16, 3, 9, 19, -7, -15, 20, 10, -14,
  //     -10, -18, -2, -19, 8, -9, -8, 4, -20, -4, -12, -3, 1, -1,
  //   ],
  //   16,
  // ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i][0], input[i][1]));
}
