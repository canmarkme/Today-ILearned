/*
 * @param ax {number}
 * @param ay {number}
 * @param bx {number}
 * @param by {number}
 * @param cx {number}
 * @param cy {number}
 *
 * @return {number}
 */

function solution(ax, ay, bx, by, cx, cy) {
  let a = ax * (by - cy);
  let b = bx * (cy - ay);
  let c = cx * (ay - by);

  return Math.abs(a + b + c);
}

//console.log(solution(1, 1, 2, 5, 3, 4));
//console.log(solution(0, 0, 0, 1000, 1000, 1000));
//console.log(solution(1, 2, 3, 4, 5, 6));
//console.log(solution(0, 0, 0, 5, 5, 0));
