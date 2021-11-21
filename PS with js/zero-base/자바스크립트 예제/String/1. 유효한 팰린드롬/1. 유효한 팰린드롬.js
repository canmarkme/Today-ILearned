/**
 * @param {string} s
 * @return {boolean}
 */

function isPalindrome(s) {
  const regex = /[^a-z0-9]+/gi;
  const str = s.toLowerCase().replace(regex, '');
  const revStr = str.split('').reverse().join('');
  return revStr === str;
}

const input = ['A man, a plan, a canal: Panama', 'race a car'];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(isPalindrome(input[i]));
}
