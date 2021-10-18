
/* 방향 그래프 */
// Graph(): edge object 객체 저장을 위한 생성자
// key: vertex
// value: list 형태로 연결된 vertex를 표현하여 edge 연결 관계 표현
function Graph() {
  this.edge = {};
}

// addVertex(): 정점(vertex) 추가
// 간선(v)의 edge를 초기화합니다.
Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
};

// addEdge(): 간선(edge) 추가
// v1: 정점1
// v2: 정점2
Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);   // v1 시작해서 v2에 연결되는 간선 추가
}

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E"];

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
console.log(graph.edge);