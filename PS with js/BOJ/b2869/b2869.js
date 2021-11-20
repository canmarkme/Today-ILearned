const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

/**
 * A: 낮에 올라간 높이
 * B: 자는동안 미끄러진 높이
 * V: 정상 높이
 */
const A = +input[0];
const B = +input[1];
const V = +input[2];

// 정상 도달 날짜 = 총 이동 거리 / 하루 이동 거리
// 총 이동 거리 = 정상 높이 - 미끄러진 높이
// 하루 이동 거리 = 낮에 올라간 높이 - 미끄러진 높이
console.log(Math.ceil((V - B) / (A - B)));