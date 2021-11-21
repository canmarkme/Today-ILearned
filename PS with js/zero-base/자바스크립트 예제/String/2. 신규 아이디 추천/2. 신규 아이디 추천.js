function solution(new_id) {
  const result = new_id
    .toLowerCase()
    .replace(/[^\w-.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');

  const STRING_LENGTH = result.length;

  return STRING_LENGTH > 2 ? result : result + result.charAt(STRING_LENGTH - 1).repeat(3 - STRING_LENGTH);
}

const input = ['...!@BaT#*..y.abcdefghijklm', 'z-+.^.', '=.=', '123_.def', 'abcdefghijklmn.p'];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
