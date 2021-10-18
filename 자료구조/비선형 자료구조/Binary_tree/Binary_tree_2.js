
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

// _preOrderTraverseNode(): 재귀로 트리를 순회하며 전위 순회(내부적으로 쓰이는 함수)
BinaryTree.prototype._preOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }
  // 전위 순회 방법: N-L-R
  callback(node);                                   // ⅰ. 현재 노드를 방문합니다.(N)
  this._preOrderTraverseNode(node.left, callback);  // ⅱ. 왼쪽 서브 트리를 전위 순회합니다.(L)
  this._preOrderTraverseNode(node.right, callback); // ⅲ. 오른쪽 서브 트리를 전위 순회합니다. (R)
};

// preOrderTraverse(): 전위 순회하며 노드 출력
BinaryTree.prototype.preOrderTraverse = function (callback) {
  this._preOrderTraverseNode(this.root, callback);
};


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
console.log(tree);

function printNode(node) {
  process.stdout.write(`${node.value} → `);
}

console.log("********* Pre-Order ***********");
tree.preOrderTraverse(printNode);
console.log("end");