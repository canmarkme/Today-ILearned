
/* 중위 순위 구현 + 특정값 */
// Node(): value와 left, right node 저장을 위한 생성자
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// BinarySearchTree(): 시작 노드인 root를 저장하기 위한 생성자
function BinarySearchTree() {
  this.root = null;
}

// _inOrderTraverseNode(): 재귀로 트리를 순회하며 중위 순회
BinarySearchTree.prototype._inOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }
  this._inOrderTraverseNode(node.left, callback);
  callback(node);
  this._inOrderTraverseNode(node.right, callback);
};

// inOrderTraverse(): 중위 순회하며 노드 출력
BinarySearchTree.prototype.inOrderTraverse = function (callback
) {
  this._inOrderTraverseNode(this.root, callback);
  console.log("end");
};

// _insertNode(): 재귀로 트리를 순회하며 노드 추가 (내부 사용)
BinarySearchTree.prototype._insertNode = function (node, value) {
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
BinarySearchTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};


// + 추가
// _searchNode(): 재귀로 트리를 순회하며 값을 만족하는 노드 탐색
BinarySearchTree.prototype._searchNode = function (node, value) {
  if (node === null) {
    return false;
  }

  if (node.value === value) {
    return true;

    // 값이 작을 때 왼쪽 GO
  } else if (node.value > value) {
    return this._searchNode(node.left, value);


    // 값이 클 때 오른쪽 GO
  } else if (node.value < value) {
    return this._searchNode(node.right, value);
  }
};

// search(): value 노드 탐색
BinarySearchTree.prototype.search = function (value) {
  return this._searchNode(this.root, value);
};



// make & insert tree
let tree = new BinarySearchTree();
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

console.log(tree.search("J") ? "Found J" : "Not found J");
console.log(tree.search("I") ? "Found I" : "Not found I");