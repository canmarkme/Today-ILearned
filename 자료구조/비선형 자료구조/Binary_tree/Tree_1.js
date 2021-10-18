
/* 전위 순위 구현 */
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
// ① 아무것도 없을 때 this.root는 null이라 새 노드를 만듭니다.
// ② value가 현재 node.value와 비교해서 작으면 왼쪽
// ③ value가 현재 node.value와 비교해서 크거나 같다면 오른쪽
// ④ 왼쪽과 오른쪽에 left, right pointer가 비어있다면 새 노드를 만듭니다.
// ⑤ 비어있지 않다며 하위 노드에서 다시 비교하도록 넘겨줍니다.
BinaryTree.prototype._insertNode = function (node, value) {
  // ①, ④
  if (node === null) {
    node = new Node(value);
    // ②, ⑤
  } else if (value < node.value) {
    node.left = this._insertNode(node.left, value);
    // ③, ⑤
  } else if (value >= node.value) {
    node.right = this._insertNode(node.right, value);
  }

  return node;
};


// insert(): 노드 추가
// 작으면(small) 왼쪽, 크면(big) 오른쪽
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



/* 트리를 만들고 노드를 추가합니다. */
let tree = new BinaryTree();
tree.insert("F");
/* this.root = null -> F */
tree.insert("B");
/* this.root = F
    F.left = B
*/
tree.insert("A");
/* this.root = F
    F.left = B
    B.left = A
*/
tree.insert("D");
/* this.root = F
    F.left = B
    B.left = A
    B.right = D
*/
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");
console.log(tree);

function printNode(node) {
  process.stdout.write(`${node.value} → `);
}

console.log("\n********* Pre-Order ***********");
tree.preOrderTraverse(printNode);
console.log("end");