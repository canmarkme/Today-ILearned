
const HASH_SIZE = 5;    // 충돌 빈도를 증가시키기위해 변경

// Element(): key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// LinearHashTable(): 생성자
function LinearHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// hashCode(): 해시 함수 
LinearHashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }

  return hash % HASH_SIZE;
};

// clear(): 초기화
LinearHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// size(): 크기 변환
LinearHashTable.prototype.size = function () {
  return this.length;
};

// getBuffer(): 데이터 셋 반환
LinearHashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }
  return array;
};

// print(): 데이터 셋 출력
LinearHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + " -> " +
        this.table[i].key + ": " + this.table[i].value);
    }
  }
};


// put(): 데이터 추가
LinearHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  let startIndex = index;
  console.log(`key: ${key} → index: ${index}`);

  do {
    if (this.table[index] === undefined) {
      this.table[index] = new Element(key, value);
      this.length++;

      return true;
    }

    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);

  return false;
};


// + 추가
// 탐색 후 매개변수 key로 동일한 값인지 확인
// get(): 데이터 조회
LinearHashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  // key가 같으면 값도 같은지 확인하고 
  // ① 값이 있다면 값 return ② 값이 없다면 더 이상 볼게 없으니 undefined
  // if에 undefined라도 do~while이 도는 이유가 밀려 밀려서 저장되어 있을 수도 
  // 있으니(그러나, 이 경우는 순환탐색해서 worst 탐색이 됨..)
  do {
    if (this.table[index] !== undefined && this.table[index].key === key) {
      return this.table[index].value;
    }

    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex); // 이 과정으로 한바퀴 돌았는지 알 수 있다.

  return undefined;
};


let lht = new LinearHashTable();
lht.put("Ana", 172);
lht.put("John", 179);
lht.put("Donnie", 183);
lht.put("Mindy", 190);
lht.put("Paul", 168);     // collision
console.log("");

console.log(lht.get("Ana"));
console.log(lht.get("Paul"));
console.log(lht.get("Kim"));
