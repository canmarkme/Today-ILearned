
// Node(): data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// LinkedList(): head와 length를 가지고 있는 객체
function LinkedList() {
  this.head = null;
  this.length = 0;
}


// size(): 연결 리스트 내 노드 개수 확인
LinkedList.prototype.size = function () {
  return this.length;
};

// isEmpty(): 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function () {
  return this.length === 0;  // 일치 비교 연산자
};

// printNode(): 노드 출력
LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} → `);
  }
  console.log("null");
}


// insert(): position 위치에 노드 추가
LinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value);
  let current = this.head;
  let index = 0;
  let prev;


  if (position === 0) {
    node.next = current;
    this.head = node;

  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    node.next = current;
    prev.next = node;
  }
  this.length++;

  return true;
}


// + 추가
//remove(): value 데이터를 찾아 노드 삭제
LinkedList.prototype.remove = function (value) {
  let current = this.head;    // current는 항상 최초의 노드를 가리킵니다.
  let prev = current;         // prev도 현재 current로 초기화 합니다.

  // 제거할 value를 찾습니다.
  while (current.data != value && current.next != null) {
    prev = current;
    current = current.next;
  }

  // 경우의 수 1) 제거할 value를 찾지 못했을 때
  if (current.data != value) {
    return null;
  }


  // 경우의 수 2) 제거할 value를 찾았을 때 current는 사라지고
  //// 경우의 수 2-1) 첫번째 노드면 head로 업데이트 돼야 한다.
  //// 경우의 수 2-2) 첫번째 노드가 아니라면 else 문으로
  if (current === this.head) {
    this.head = current.next;
  } else {
    prev.next = current.next;
  }

  this.length--;

  // 삭제 데이터 반환
  return current.data;
}



let ll = new LinkedList();
console.log(ll);


ll.insert(1);
ll.printNode();
ll.insert(10);
ll.printNode();
ll.insert(100);
ll.printNode();

ll.insert(2, 1);
ll.printNode();
ll.insert(3, 3);
ll.printNode();

console.log(ll.remove(1000));
ll.printNode();
console.log(ll.remove(1));
ll.printNode();
console.log(ll.remove(2));
ll.printNode();
console.log(ll.remove(100));
ll.printNode();




console.log(ll.size());