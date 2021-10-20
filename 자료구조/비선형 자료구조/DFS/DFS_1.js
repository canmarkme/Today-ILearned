

/* 방향 그래프 */
// Graph(): edge object 객체 저장을 위한 생성자
function Graph() {
  this.edge = {};
  this.visited = {};
}

// addVertex(): 정점(vertex) 추가
// 간선(v)의 edge를 초기화합니다.
Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
  this.visited[v] = false;    // vertex가 추가될 때 false로 초기화해서 방문 한 적 없음을 보여줍니다.
};


// addEdge(): 간선(edge) 추가
Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
}

// print(): 현재 Graph 연결 상태 출력
Graph.prototype.print = function () {
  for (let vertex in this.edge) {
    let neighbors = this.edge[vertex];
    if (neighbors.length == 0) continue;

    process.stdout.write(`${vertex} → `);
    for (let j = 0; j < neighbors.length; j++) {
      process.stdout.write(`${neighbors[j]} `);
    }

    console.log("");
  }
};


// dfs(): DFS 탐색
/**
 * 예시) A의 neighbors는 B,C,D
 */
Graph.prototype.dfs = function (startVertex) {
  this._dfsRecursiveVisit(startVertex);
};

// _dfsRecursiveVisit(): 재귀를 이용한 DFS 탐색
Graph.prototype._dfsRecursiveVisit = function (vertex) {

  // 1. 종료 조건
  if (this.visited[vertex]) return;

  // 2. 재귀 호출
  this.visited[vertex] = true;    // 방문함
  console.log(`visit "${vertex}"`);

  let neighbors = this.edge[vertex];
  for (let i = 0; i < neighbors.length; i++) {
    this._dfsRecursiveVisit(neighbors[i]);
  }
};


let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
graph.print();
console.log("");

graph.dfs("A");