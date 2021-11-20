// 중복 코드 제거, 함수 만듦
const count = word =>
  [...word].reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

const isAnagram = (a, b) => {
  // 길이가 같은지 먼저 걸러줍니다.
  if (a.length !== b.length) return false;
  const [hash1, hash2] = [count(a), count(b)];
  return Object.keys(hash1).every(key => hash1[key] === hash2[key]);
};

let input = [
  ['AbaAeCe', 'baeeACA'],
  ['abaCC', 'Caaab'],
  ['', 'b'],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(isAnagram(input[i][0], input[i][1]));
}