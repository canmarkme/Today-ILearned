function timeDiff(t) {
  return t[0] * 60 + t[1] * 1; // 시(hour) * 60 + 분(minutes) * 1
}

// 음악길이보다 재생시간이 길면, 음악 길이가 반복됩니다.
// time: 재생시간, neoM: 네오's 멜로디
function play(time, neoM) {
  const neoLth = neoM.length;
  // console.log(time, neoM);
  // console.log(neoMLth);

  return neoM.repeat(time / neoLth) + neoM.substring(0, time % neoLth);
}

function solution(m, musicinfos) {
  const song = m.replace(/([A-Z]\#)/g, (string, char) => char.toLowerCase());

  const radio = musicinfos.map(value => {
    const info = value.split(',');
    const neoM = info[3].replace(/([A-Z]\#)/g, (string, char) => char.toLowerCase());
    return [info[2], play(timeDiff(info[1].split(':')) - timeDiff(info[0].split(':')), neoM)];
  });
  console.log(radio);

  // 라디오에서 재생된 시간이 제일 긴 음악
  const answer = radio.reduce((answer, x) => {
    if (x[1].indexOf(x)) {
      if (answer.length === 0 || answer[1].length < x[1].length) return x;
    }
    return answer;
  }, []);

  return answer.length === 0 ? '(None)' : answer[0];
}

const input = [
  // ['ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF']],
  // ['CC#BCC#BCC#BCC#B', ['03:00,03:30,FOO,CC#B', '04:00,04:08,BAR,CC#BCC#BCC#B']],
  ['ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF']],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i][0], input[i][1]));
}
