let result;

function recursive(n) {
  if (n == 1) {
    return n;
  }

  // 5! => 5 x 4 x 3 x 2 x 1 
  return recursive(n - 1) * n;
}

result = recursive(5);
console.log(result);