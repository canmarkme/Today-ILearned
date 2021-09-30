console.log(score);   // output: undefined
var score = 50;
console.log(score);   // output: 50

// using let / const
// ReferenceError: Cannot access 'score_2' before initialization
console.log(score_2);
let score_2 = 80;