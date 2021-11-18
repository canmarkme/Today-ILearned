let input = [
  80, [[80, 20], [50, 40], [30, 10]]
];

process.stdout.write(`#${1} `);
console.log(solution(input[0], input[1]));

function solution(k, dungeons) {
  let result = 0;
  const maxHP = Math.max(...dungeons.map(p => Math.max(...p)));
  const INITIAL_HP_INDEX = dungeons.findIndex(dungeon => dungeon[0] === maxHP);
  console.log(INITIAL_HP_INDEX);

  // 1. 첫 판
  if (k >= dungeons[INITIAL_HP_INDEX][0]) {
    k -= dungeons[INITIAL_HP_INDEX][1];
    result++;
  }
  console.log(k);
  dungeons.splice(INITIAL_HP_INDEX, 1);


  // 2. 이후 던전
  dungeons.sort(function (dungeon1, dungeon2) {
    const COLUMN_INDEX = 1;
    return (dungeon1[COLUMN_INDEX] < dungeon2[COLUMN_INDEX]) ? -1 : ((dungeon1[COLUMN_INDEX] > dungeon2[COLUMN_INDEX]) ? 1 : 0);
  });

  console.log(dungeons);



  for (let i = 0; i < dungeons.length; i++) {
    console.log(dungeons[i][0]);

    if (k < dungeons[i][0]) break;
    k = k - dungeons[i][1];
    result++;
  }

  return result;
}

