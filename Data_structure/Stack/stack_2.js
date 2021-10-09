
// Stack(): 생성자 함수로 초기 데이터 설정
function Stack(array) {
  this.array = array ? array : [];
};

// getBuffer(): 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function () {
  return this.array.slice();    // 배열 복사  
};

// isEmpty(): 객체 내 데이터 존재 여부 파악
Stack.prototype.isEmpty = function () {
  return this.array.length == 0;
};

// + 추가
// push(): 데이터 추가
Stack.prototype.push = function (element) {
  return this.array.push(element);
};

// pop(): 데이터 삭제
Stack.prototype.pop = function () {
  return this.array.pop();
};

// peak(): 가장 끝 데이터 반환
Stack.prototype.peak = function () {
  return this.array[this.array.length - 1];
};

// size(): 스택 내 데이터 길이
Stack.prototype.size = function () {
  return this.array.length;
};



let stack = new Stack([1, 2]);

console.log(stack);
stack.push(3);
console.log(stack);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peak());
console.log(stack.size());
console.log();