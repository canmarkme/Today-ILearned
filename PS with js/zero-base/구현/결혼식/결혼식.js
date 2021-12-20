function solution(times) {
  let answer = 0;

  const timelines = [...new Set(times.flat(2))].sort((a, b) => a - b);

  const open = times.map(time => time[0]).sort((a, b) => b - a);
  const close = times.map(time => time[1]).sort((a, b) => b - a);

  let count = 0;
  for (const time of timelines) {
    while (time === open[open.length - 1]) {
      count += 1;
      open.pop();
    }
    while (time === close[close.length - 1]) {
      count -= 1;
      close.pop();
    }
    answer = Math.max(answer, count);
  }

  return answer;
}

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
