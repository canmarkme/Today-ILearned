
// CurcularQueue(): 초기 속성 값 설정을 위한 생성자 함수
function CircularQueue(array = [], size = 5) {
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
}

// getBuffer(): 객체 내 데이터 셋 반환
CircularQueue.prototype.getBuffer = function () {
  return this.array.slice();
}

// isEmpty(): 데이터가 비어 있는지 확인
CircularQueue.prototype.isEmpty = function () {
  return this.length == 0;
}

// isFull(): 데이터가 꽉 찼는지 확인
CircularQueue.prototype.isFull = function () {
  return this.length == this.size;
}


// + 추가
// endqueue(): 데이터 추가
CircularQueue.prototype.enqueue = function (element) {
  if (this.isFull()) return false;

  this.array[this.tail] = element;
  this.tail = (this.tail + 1) % this.size;  // 값이 추가 돼면 특정 index를 넘어가지 않게 만듦
  this.length++;  // 값이 추가 돼서 

  return true;
}

// dequeue(): 데이터 삭제
CircularQueue.prototype.dequeue = function () {
  if (this.isEmpty()) return undefined;

  let element = this.array[this.head];
  delete this.array[this.head];
  this.head = (this.head + 1) % this.size;  // 값이 추가 돼면 특정 index를 넘어가지 않게 만듦
  this.length--;

  return element;
}



let cq = new CircularQueue([1, 2, 3, 4]);
console.log(cq);
cq.enqueue(5);
cq.enqueue(6);
console.log(cq);

console.log(cq.dequeue());
console.log(cq.dequeue());
console.log(cq);  // head 위치가 2로 넘어갔다.
cq.enqueue(6);
console.log(cq);
