
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


// + 추가
// insert(): position 위치에 노드 추가
LinkedList.prototype.insert = function (value, position = 0) {
  // position 범위 체크 
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value);
  let current = this.head;
  let index = 0;
  let prev;


  if (position === 0) {     // 첫 노드를 넣을 것!
    node.next = current;
    this.head = node;     // 최신 노드가 head가 됩니다.

  } else {
    while (index++ < position) {  // ?
      console.log(`🥞 index: ${index}  position: ${position}`);
      // 예를 들어, 두 번째 노드가 current라면 첫 번째 노드(prev)는 current를 가리키고 있다.
      prev = current;
      current = current.next;
    }

    // index 위치에 다다랐을 때, 새 노드 추가 방법 [여기가 새 노드를 중간에 넣는 중요 로직]
    // current와 prev사이에 새로운 노드가 들어가게 됩니다.
    node.next = current;    // 새로운 노드 next는 current를 가리킵니다.
    prev.next = node;       // prev의 next는 새로운 노드가 됩니다.
    // 위 방법은 중간 지점 추가 가능하지만 끝 지점에 추가도 이상이 없습니다. 
  }
  this.length++;

  return true;
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

console.log(ll.size());