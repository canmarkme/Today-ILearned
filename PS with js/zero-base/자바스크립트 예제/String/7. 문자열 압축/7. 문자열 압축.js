function compress(string) {
  return string.replace(/(.)\1+/g, match => match[0] + match.length);
}

const input = ['ABBCCCE'];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(compress(input[i]));
}
