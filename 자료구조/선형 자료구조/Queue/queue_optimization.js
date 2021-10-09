
/* tail: 들어오는 위치 */
/* head: 나가는 위치 */
function Queue(array) {
  this.array = array ? array : [];
  this.tail = array ? array.length : 0;
  this.head = 0;
}

// 💡 enqueue, dequeue 메서드는 인덱스를 활용합니다.

Queue.prototype.enqueue = function (element) {

  // 현재 tail에 element(값)를 넣고 this.tail을 한 칸 증가합니다. 
  return this.array[this.tail++] = element;
};

Queue.prototype.dequeue = function () {
  if (this.tail === this.head) return undefined;  // 데이터가 없는 경우

  let element = this.array[this.head];
  console.log("🌭" + this.head);
  delete this.array[this.head++];
  console.log("🧃" + this.head);
  return element;
};

// size(): 큐 안의 데이터 개수 확인
Queue.prototype.size = function () {
  return this.array.length;
};


let queue = new Queue([1, 2]);
console.log(queue);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
console.log(queue.size());