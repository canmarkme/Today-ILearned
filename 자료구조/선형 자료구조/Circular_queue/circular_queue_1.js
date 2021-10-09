
// CurcularQueue(): 초기 속성 값 설정을 위한 생성자 함수
function CircularQueue(array = [], size = 5) {
  this.array = array;

  // this.size 초기화 조건문이 있는 이유: 
  // 메서드 호출 시 size 지정을 안했다면, size = 5로 들어와서 
  // 원래 크기보다 작을 수 있기 때문에 가장 큰 값 위주로 size를 설정해야합니다.
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


let cq = new CircularQueue([1, 2, 3]);
console.log(cq);
console.log(cq.isEmpty());
console.log(cq.isFull());
console.log(Object.getOwnPropertyDescriptors(CircularQueue.prototype));