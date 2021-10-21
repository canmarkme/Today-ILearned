
// TrieNode(): 문자값과 단어 여부값 저장을 위한 노드 생성자
function TrieNode() {
  this.children = {};
  this.endOfWord = false;
}

// Trie(): 노드의 시작인 루트 노드 저장을 위한 생성자
function Trie() {
  this.root = new TrieNode();
}

// insert(): 문자열 추가
Trie.prototype.insert = function (word) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    let node = current.children[ch];
    if (node === undefined) {
      node = new TrieNode();
      current.children[ch] = node;
    }
    current = node;
  }
  current.endOfWord = true;
}

// search(): 문자열 검색
Trie.prototype.search = function (word) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    let node = current.children[ch];
    if (node === undefined) {
      return false;
    }
    current = node;
  }
  return current.endOfWord;
};


// + 추가
// delete(): 문자열 삭제
// return 값을 노드 삭제 여부에 사용합니다.
// word: 삭제할 단어
// current: 현재 노드
// index: 현재 노드의 index
Trie.prototype.delete = function (word, current = this.root, index = 0) {

  // 1. 종료 조건
  if (index === word.length) {
    if (!current.endOfWord) return false;
    current.endOfWord = false;
    return Object.keys(current.children).length === 0;    // child 여부 확인
  }

  // 2. 재귀 조직 처리
  let ch = word[index];
  let node = current.children[ch];

  if (node === undefined) return false;   // 삭제할 그런 단어 노드가 없음

  let isDeleteNode = this.delete(word, node, index + 1) && !node.endOfWord;

  if (isDeleteNode) {
    delete current.children[ch];
    return Object.keys(current.children).length === 0;
  }

  return false;
};


let trie = new Trie();
trie.insert("be");
trie.insert("bee");
trie.insert("can");
trie.insert("cat");
trie.insert("cd");

console.log(trie.search("bee"));
trie.delete("bear");
console.log(trie.search("bee"));
trie.delete("b");
console.log(trie.search("bee"));
trie.delete("bee");
console.log(trie.search("bee"));

console.log(trie.root.children);
console.log(trie.root.children["b"]);
console.log(trie.root.children["b"].children["e"]);