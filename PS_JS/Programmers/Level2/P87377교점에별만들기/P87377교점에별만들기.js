let input = [
  [2, -1, 4],
  [-2, -1, 4],
  [0, -1, 1],
  [5, -8, -12],
  [5, 8, 12]
];

// for (let i = 0; i < input.length; i++) {
//   process.stdout.write(`#${i + 1} `);
//   //console.log(solution(input));
// }

console.log(solution(input));


function solution(line) {
  const N = line.length;
  const INF = Number.MAX_SAFE_INTEGER;
  const crossPoints = [];
  let minX = INF;
  let minY = INF;
  let maxX = -INF;
  let maxY = -INF;

  // 1. 문제 참고 사항 공식을 이용해 모든 정수 교차점과 좌표의 최대/최솟값을 구합니다.
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      const [a, b, e] = line[i];
      const [c, d, f] = line[j];

      const mod = a * d - b * c;
      if (!mod) continue; // 분모가 0인 경우 제외

      const xNumerator = b * f - e * d;
      const yNumerator = e * c - a * f;

      if (xNumerator % mod || yNumerator % mod) continue;   // 실수 교차점


      // 두 직선의 방정식이 교차되는 ( x , y ) 좌표가 나옵니다.
      const x = xNumerator / mod;
      const y = yNumerator / mod;

      // 교점 추가
      crossPoints.push([x, y]);

      // x, y의 최솟값, 최댓값을 구합니다.
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }

  // 2. x,y 좌표에 별을 찍어줍니다.
  const paper = [...Array(maxY - minY + 1)].map(() => [...Array(maxX - minX + 1)].fill('.'));

  crossPoints.forEach(([x, y]) => {
    paper[maxY - y][x - minX] = '*';

  });


  return paper.map(v => v.join(''));
}