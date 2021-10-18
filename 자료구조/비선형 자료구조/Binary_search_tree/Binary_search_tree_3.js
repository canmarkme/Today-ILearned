
/* 중위 순위 구현 + 값 삭제 */
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
// 1. 삭제할 노드 찾기
// 2. 삭제 가능 여부(child가 있는 경우)
// 2-1. child가 없는 경우 
// 2-2. child가 1개인 경우 
// 2-3. child가 2개인 경우 // 오른쪽 서브트리 중 가장 작은 child 값이 올라갑니다.


// _findMinNode(): 반복문으로 트리를 순회하며 최솟값을 보유한 노드 탐색
BinarySearchTree.prototype._findMinNode = function (node) {
  while (node && node.left !== null)
    node = node.left;
  return node;
};

// _removeNode(): 재귀로 트리를 순회하며 값을 만족하는 노드를 찾고 삭제
BinarySearchTree.prototype._removeNode = function (node, value) {
  if (node === null)
    return null;

  if (node.value === value) {
    // case 1: leaf node
    if (node.left === null && node.right === null) {
      node = null;
    }
    // case 2: 1 child node
    else if (node.left === null) {
      node = node.right;
    } else if (node.right === null) {
      node = node.left;
    }
    // case 3: 2 child node
    else {
      // 오른쪽 서브 트리에서 노드를 찾아서 현재 노드값으로 업데이트합니다.
      let aux = this._findMinNode(node.right);    // 대체 변수
      node.value = aux.value;
      node.right = this._removeNode(node.right, aux.value);
    }

  } else if (node.value > value) {
    node.left = this._removeNode(node.left, value);

  } else if (node.value < value) {
    node.right = this._removeNode(node.right, value);
  }
  return node;
};


// remove(): 노드 삭제
BinarySearchTree.prototype.remove = function (value) {
  root = this._removeNode(this.root, value);
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


tree.inOrderTraverse(printNode);
tree.remove("A");   // 0
tree.inOrderTraverse(printNode);
tree.remove("B");   // 1
tree.inOrderTraverse(printNode);
tree.remove("I");   // 2
tree.inOrderTraverse(printNode);
console.log(tree.root);