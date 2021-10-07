
let s = '174771177';

solution(s);

function solution(s) {
  let answer = 0;
  let countValue = 0;
  let ext = s.split("");

  const res2 = ext.reduce((t, a) => {

    t[a] = (t[a] || 0) + 1
    return t
  }, {})


  let result_map = Object.keys(res2).map(function (key) {
    return [String(key), res2[key]];
  });


  for (let i = 0; i < result_map.length; i++) {

    countValue = result_map[0][1];
    cur = result_map[i][1];
    if (countValue < cur) {
      countValue = cur;
      answer = result_map[i][0];
    }
  }
  console.log(answer);

}

