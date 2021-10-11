
import { LinkedList } from "./linked_list.mjs";

const HASH_SIZE = 37;

// Element(): Key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// ChainingHashTable(): 생성자
function ChainingHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// hashCode(): 해시 함수
ChainingHashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

// clear(): 초기화
ChainingHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// size(): 크기 반환
ChainingHashTable.prototype.size = function () {
  return this.length;
};

// put(): 데이터 추가
ChainingHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  console.log(`key: ${key} → index: ${index}`);

  if (this.table[index] === undefined) {
    this.table[index] = new LinkedList();
  }

  this.table[index].append(new Element(key, value));
  this.length++;

  return true;
}


// + 추가
/*
for문으로 table 전체 탐색합니다.
if 테이블에 링크드 리스트 객체가 있다면 
링크드 리스트 객체 내의 프로퍼티 head 값을 current로 설정합니다.
current.data == element 입니다.
current.data를 array에 넣어줍니다.
그 다음 next로 이동합니다.
null을 만날 때 까지 반복합니다.
*/

// getBuffer(): 데이터 셋 반환
ChainingHashTable.prototype.getBuffer = function () {
  let array = [];   // element를 저장할 임시 배열

  // 전체 탐색
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      let current = this.table[i].head;

      do {
        array.push(current.data);
        current = current.next;
      } while (current);  // null 만나면 끝남
    }
  }

  return array;
};

// print(): 데이터 셋 출력
ChainingHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      let current = this.table[i].head;
      process.stdout.write(`#${i}`);

      // i의 next를 지속적으로 출력합니다.
      do {
        process.stdout.write(` → ${current.data.key}: ${current.data.value}`);
        current = current.next;
      } while (current);  // null 만나면 끝남

      console.log("");
    }
  }
};



// 링크드 리스트의 element(key + value + next)가 null을 만날 때 까지 append() 합니다.

let cht = new ChainingHashTable();
cht.put("Ana", 172);
cht.put("Donnie", 183); // collision
cht.put("Sue", 163);
cht.put("Jamie", 168); // collision
cht.put("Paul", 190);
console.log(cht);

cht.print();
console.log(cht.getBuffer());