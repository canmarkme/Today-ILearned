
let input = [
  { name: "john", age: 27, height: 181 },
  { name: "alice", age: 12, height: 148 },
  { name: "bob", age: 14, height: 156 }
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

function answer(obj) {
  let result = obj.height < 150 ? false : true;

  return result;
}


