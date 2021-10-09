
// Element(): 데이터와 우선순위를 저장하기 위한 생성자 함수
function Element(data, priority) {
  this.data = data;
  this.priority = priority;
}

// PriorityQueue(): Element 관리를 위한 생성자 함수
function PriorityQueue() {
  this.array = [];
}

// getBuffer(): 객체 내 데이터 셋 반환
PriorityQueue.prototype.getBuffer = function () {
  return this.array.map((element) => element.data);
};

// isEmpty(): 객체 내 데이터 존재 여부 파악
PriorityQueue.prototype.isEmpty = function () {
  return this.array.length === 0;
};



// + 추가
// enqueue(): 데이터 추가 ⭐
PriorityQueue.prototype.enqueue = function (data, priority) {
  let element = new Element(data, priority);
  let added = false;  // added는 ① 배열 사이에 값 ② 맨 뒷 값 인지 구분해 주는 변수

  for (let i = 0; i < this.array.length; i++) {

    // 현재 우선순위가 기존 우선순위보다 낮을 때
    if (element.priority < this.array[i].priority) {

      // i번째 (0이라 삭제 안함) 개체(element)를 추가합니다.
      this.array.splice(i, 0, element);
      added = true;
      break;
    }
  }

  // added가 추가 되지 않았으면 array 뒤에 element를 추가 합니다.
  if (!added) {
    this.array.push(element);
  }

  return this.array.length;
};

// dequeue(): 데이터 삭제
PriorityQueue.prototype.dequeue = function () {
  return this.array.shift();
};


let pq = new PriorityQueue();
pq.enqueue("Alice", 1);
pq.enqueue("Bob", 2);
console.log(pq);

pq.enqueue("Tom", 1);
pq.enqueue("John", 3);
console.log(pq);

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq);