let input = [
  "Hello, My name is john",
  "This week is closed due to COVID-19",
  "fifty percent off this week"
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

function answer(matter) {
  let fix_str = "";
  for (let item of matter.split(" ")) {
    fix_str = fix_str + item[0].toUpperCase() + item.slice(1) + " ";
  }
  return fix_str;
}


