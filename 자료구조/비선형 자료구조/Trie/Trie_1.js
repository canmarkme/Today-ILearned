
// TrieNode(): 문자값과 단어 여부값 저장을 위한 노드 생성자
function TrieNode() {
  this.children = {};      // key-value 형태로 노드를 저장(key: 문자, value: trieNode)
  this.endOfWord = false;  // 끝 문자인지 확인하는용
}

// Trie(): 노드의 시작인 루트 노드 저장을 위한 생성자
function Trie() {
  this.root = new TrieNode();
}

// insert(): 문자열 추가
Trie.prototype.insert = function (word) {
  let current = this.root;

  // 단어를 순회하면서 없으면 노드를 생성 후 붙여줍니다.
  // 단어가 있다면 기존 노드를 활용하면서 current노드를 업데이트합니다.
  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    let node = current.children[ch];

    // children에 노드 여부 확인
    if (node === undefined) {
      node = new TrieNode();
      current.children[ch] = node;
    }

    current = node;   // 기존 노드가 있으면 current에 업데이트
  }

  current.endOfWord = true;
};


let trie = new Trie();
trie.insert("be");
trie.insert("bee");
trie.insert("can");
trie.insert("cat");
trie.insert("cd");

console.log(trie.root);
console.log(trie.root.children["c"]);