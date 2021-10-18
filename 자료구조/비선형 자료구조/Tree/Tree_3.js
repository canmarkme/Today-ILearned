
/* 후위 순위 구현 */
// Node(): value와 left, right node 저장을 위한 생성자
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// BinaryTree(): 시작 노드인 root를 저장하기 위한 생성자
function BinaryTree() {
  this.root = null;
}


// _insertNode(): 재귀로 트리를 순회하며 노드 추가 (내부적으로 쓰이는 함수)
BinaryTree.prototype._insertNode = function (node, value) {
  if (node === null) {
    node = new Node(value);
  } else if (value < node.value) {
    node.left = this._insertNode(node.left, value);
  } else if (value >= node.value) {
    node.right = this._insertNode(node.right, value);
  }

  return node;
};


// insert(): 노드 추가
BinaryTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};


// _postOrderTraverseNode(): 재귀로 트리를 순회하며 후위 순회(내부적으로 쓰이는 함수)
BinaryTree.prototype._postOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }

  // 후위 순회 방법: L-R-N
  this._postOrderTraverseNode(node.left, callback);   // ⅰ. 왼쪽 서브 트리를 후위 순회합니다.(L)
  this._postOrderTraverseNode(node.right, callback);  // ⅱ. 오른쪽 서브 트리를 후위 순회합니다. (R)
  callback(node);                                     // ⅲ. 현재 노드를 방문합니다.(N)
};

// postOrderTraverse(): 후위 순회하며 노드 출력
BinaryTree.prototype.postOrderTraverse = function (callback) {
  this._postOrderTraverseNode(this.root, callback);
};



/* 트리를 만들고 노드를 추가합니다. */
let tree = new BinaryTree();
tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

function printNode(node) {
  process.stdout.write(`${node.value} → `);
}

console.log("\n********* Post-Order ***********");
tree.postOrderTraverse(printNode);
console.log("end");