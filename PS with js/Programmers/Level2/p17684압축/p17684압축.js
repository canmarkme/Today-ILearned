function solution(msg) {
  const answer = [];
  const dict = ['']; // dict[0] 빈 값을 넣어줍니다.
  let j = 0;

  // 1. 사전 초기화
  // A: 65, Z: 90
  for (let i = 65; i < 91; i++) {
    dict.push(String.fromCharCode(i));
  }

  console.log(dict);
  for (let i = 0; i < msg.length; i = j) {
    let w = msg[i];

    for (j = i + 1; j < msg.length; j++) {
      // 2. W+C 합친 문자열이 사전에 등록되어 있지 않았다면 사전에 등재합니다.
      const c = msg[j];
      if (!dict.includes(w + c)) {
        dict.push(w + c);
        break;
      }
      w += c;
    }

    // w 색인 번호를 출력합니다.
    answer.push(dict.indexOf(w));
  }
  return answer;
}
// const input = ['ABABABABABABABAB'];
const input = ['KAKAO'];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
