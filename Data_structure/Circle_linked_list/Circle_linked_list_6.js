
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


// printNode(): 노드 출력
CircularLinkedList.prototype.printNode = function () {
  process.stdout.write("head → ");
  if (this.length != 0) {
    process.stdout.write(`${this.head.data} → `);

    for (let node = this.head.next; node != this.head; node = node.next) {
      process.stdout.write(`${node.data} → `);
    }
  }
  console.log("null");
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


// insert(): position 위치에 노드 추가
CircularLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value);
  let current = this.head;
  let index = 0;
  let prev;

  if (position === 0) {
    node.next = current;

    if (this.isEmpty()) {
      current = node;

    } else {
      while (current.next != this.head) {
        current = current.next;
      }
    }

    this.head = node;
    current.next = this.head;

  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    node.next = current;
    prev.next = node;

    if (node.next === null) {
      node.next = this.head;
    }
  }
  this.length++;

  return true;
};


// remove(): value 데이터를 찾아 노드 삭제
CircularLinkedList.prototype.remove = function (value) {
  let current = this.head;
  let prev = current;
  let data;

  while (current.data != value && current.next != this.head) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  data = current.data;

  if (current === this.head) {
    while (current.next != this.head) {
      current = current.next;
    }

    this.head = this.head.next;
    current.next = this.head;

  } else {
    prev.next = current.next;
  }
  this.length--;

  return data;
};


// removeAt(): position 위치 노드 삭제
CircularLinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head;
  let index = 0;
  let prev;
  let data;

  if (position === 0) {
    data = current.data;
    while (current.next != this.head) {
      current = current.next;
    }

    this.head = this.head.next;
    current.next = this.head;

  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    data = current.data;
    prev.next = current.next;
  }
  this.length--;

  return data;
};



// +추가
// indexOf(): value 값을 갖는 노드 위치 반환
CircularLinkedList.prototype.indexOf = function (value) {
  let current = this.head;
  let index = 0;

  // 시작이 head이기 때문에 시작과 동시에 조건과 같아서 do~while() 사용
  do {
    if (current.data === value) {
      return index;
    }

    index++;
    current = current.next;
  } while (current != this.head);

  return -1;
};


// remove2(): indexOf + removeAt = remove
CircularLinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};



/* Test code */
let cll = new CircularLinkedList();
cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode();

console.log(cll.indexOf(1000));
console.log(cll.indexOf(1));
console.log(cll.indexOf(100));
console.log(cll.indexOf(10));
console.log(cll.remove2(1000));
cll.printNode();
console.log(cll.remove2(1));
cll.printNode();
console.log(cll.remove2(2));
cll.printNode();
console.log(cll.remove2(100));
cll.printNode();
console.log(cll.size());