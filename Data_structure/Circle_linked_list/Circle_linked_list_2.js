
// Node(): data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// LinkedList(): head와 length를 가지고 있는 객체
function CircularLinkedList() {
  this.head = null;
  this.length = 0;
}

// size(): 연결 리스트 내 노드 개수 확인
CircularLinkedList.prototype.size = function () {
  return this.length;
};

// isEmpty(): 객체 내 노드 존재 여부 파악
CircularLinkedList.prototype.isEmpty = function
  () {
  return this.length === 0;
};


// + 추가
// printNode(): 노드 출력
CircularLinkedList.prototype.printNode = function () {
  process.stdout.write("head → ");
  if (this.length != 0) {
    process.stdout.write(`${this.head.data} → `);

    // 초기값이 head면 바로 종료가 돼버려..
    for (let node = this.head.next; node != this.head; node = node.next) {
      process.stdout.write(`${node.data} → `);
    }
  }
  console.log("null");  // 원래 지속 순환이지만 head를 만나면 null 로그 찍음
};

// append(): 연결 리스트 가장 끝에 노드 추가
CircularLinkedList.prototype.append = function (value) {
  let node = new Node(value),
    current = this.head;
  if (this.head === null) {
    this.head = node;

  } else {
    while (current.next != this.head) {   // 끝이 아니면
      current = current.next;
    }
    current.next = node;
  }

  node.next = this.head;
  this.length++;
};



/* Test code */
let cll = new CircularLinkedList();
cll.append(1);
cll.append(10);
cll.append(100);

cll.printNode();
console.log(cll.size());