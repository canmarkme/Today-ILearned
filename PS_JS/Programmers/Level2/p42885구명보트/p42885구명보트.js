let input = [
  [[70, 50, 80, 50], 100],
  [[70, 80, 50], 100]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i][0], input[i][1]));
}

function solution(people, limit) {

  let answer = 0;
  const pSort = people.sort((a, b) => b - a);   // 80 70 50 50
  // 큰 애 순으로 나가게 됩니다.

  let j = people.length - 1;

  for (let start = 0; i <= end; start++) {
    if (pSort[start] + pSort[end] > limit) {
      answer++;

    } else {
      end--;  // limit보다 작게 되면 두명이 타고 나가니까 j를 하나 줄여줍니다.
      answer++;
    }
  }

  return answer;
}

//console.log(people, limit);
//console.log(`i: ${i}, j: ${j}`);
//console.log(`i: ${pSort[i]}, j: ${pSort[j]}`);