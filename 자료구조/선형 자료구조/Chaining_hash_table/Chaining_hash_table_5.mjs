
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

// getBuffer(): 데이터 셋 반환
ChainingHashTable.prototype.getBuffer = function () {
  let array = [];

  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      let current = this.table[i].head;

      do {
        array.push(current.data);
        current = current.next;
      } while (current);
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

      do {
        process.stdout.write(` → ${current.data.key}: ${current.data.value}`);
        current = current.next;
      } while (current);

      console.log("");
    }
  }
};

// get(): 데이터 조회
ChainingHashTable.prototype.get = function (key
) {
  let index = this.hashCode(key);
  if (this.table[index] !== undefined && !this.
    table[index].isEmpty()) {
    let current = this.table[index].head;
    do {
      if (current.data.key === key) {
        return current.data.value;
      }
      current = current.next;
    } while (current);
  }
  return undefined;
};



// + 추가
// ① 테이블 인덱스 요소가 있는지 확인하고
// ② 링크드리스트 순회하면서 동일한 key인지 비교합니다. 
// ③ 동일한 key라면 remove 메서드를 통해서 데이터를 넘겨서 삭제합니다.
// ④ isEmpty() 확인 후 해당 링크드리스트 삭제 유무를 확인합니다.
// remove(): 데이터 삭제
ChainingHashTable.prototype.remove = function (key) {
  let index = this.hashCode(key);
  let element = undefined;

  if (this.table[index] !== undefined) {
    let current = this.table[index].head;

    do {
      if (current.data.key === key) {
        element = current.data;
        this.table[index].remove(current.data);
        this.length--;

        if (this.table[index].isEmpty()) {
          delete this.table[index];  // 링크드리스트도 삭제
        }
      }
      current = current.next;
    } while (current);
  }

  return element;
};


let cht = new ChainingHashTable();
cht.put("Ana", 172);
cht.put("Donnie", 183); // collision
cht.put("Sue", 163);
cht.put("Jamie", 168); // collision
cht.put("Paul", 190);
console.log("");
cht.print();

console.log(cht.remove("Sue"));
console.log("");
cht.print();

console.log(cht.remove("Jamie"));
console.log("");
cht.print();

console.log(cht.remove("Jamie"));
console.log(cht);