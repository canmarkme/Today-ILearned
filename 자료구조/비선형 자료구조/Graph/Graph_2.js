
/* 방향 그래프 */
// Graph(): edge object 객체 저장을 위한 생성자
function Graph() {
  this.edge = {};
}

// addVertex(): 정점(vertex) 추가
Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
};

// addEdge(): 간선(edge) 추가
Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
}


// + 추가
// removeEdge(): 간선(edge) 삭제
// v1: 출발
// v2: 도착
Graph.prototype.removeEdge = function (v1, v2) {

  // edge에 연결되는 키 값(v1)이 있는지 확인
  // list에 값(v2)이 있는지 indexOf로 확인
  if (this.edge[v1]) {
    let idx = this.edge[v1].indexOf(v2);

    if (idx != -1) {
      this.edge[v1].splice(idx, 1);   // 인덱스로 받은 값과 배열 길이 1만큼 삭제합니다.
    }

    // 키에 연결된 빈 배열까지 delete로 삭제합니다.
    if (this.edge[v1].length === 0) {
      delete this.edge[v1];
    }
  }
};

// removeVertex(): 정점(vertex) 삭제
Graph.prototype.removeVertex = function (v) {
  // edge[v]에 값 확인을 해서 return 처리하고 이후 코드를 빠져나옵니다.
  if (this.edge[v] === undefined) return;

  let length = this.edge[v].length;   // changed length
  let connectedVertex = [...this.edge[v]];  // object copy

  // 연결된 edge들을 모두 삭제해줍니다.
  for (let i = 0; i < length; i++) {
    this.removeEdge(v, connectedVertex[i]);
  }
};


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


graph.removeEdge("B", "F");
graph.removeEdge("B", "E");
console.log(graph.edge);

graph.removeVertex("B");    // 75줄과 결과 값이 동일
console.log(graph.edge);

graph.removeVertex("D");
console.log(graph.edge);