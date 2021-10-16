
let input = [
  [8, 2, 3],
  [10, 2, 3],
  [20, 5, 7]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}

function Node(data) {
  this.data = data;
  this.next - null;
}

function LinkedList() {
  this.head = null;
}

// m: 시작위치
// k: 이동 수
function answer(n, m, k) {
  let result = [];

  // 1. Circular LinkedList 제작
  let ll = new LinkedList();
  let current, prev;
  for (let i = 1; i <= n; i++) {
    current = new Node(i);

    if (i === 1) {
      ll.head = current;

    } else {
      prev.next = current;
    }

    prev = current;
  }

  current.next = ll.head;  // 마지막 노드를 head에 연결해 원형이 되도록 만듭니다.



  // 2. 시작 node 위치 설정
  current = ll.head;

  // 예시) n: 5, m: 2
  // --하면 1회(m-1) 이동하게 됩니다. 0이면 while이 false
  while (--m) {
    prev = current;
    current = current.next;
  }


  // 3. 후보자 중 k만큼 이동해서 제거 
  let count;
  while (current.next != current) {
    result.push(current.data);
    prev.next = current.next;   // 현재 노드 삭제와 이전 노드 연결

    // k만큼 이동시키기
    count = k;
    while (count--) {
      prev = current;
      current = current.next;
    }
  }

  // 4. 마지막 남은 사람의 번호를 result에 반환
  result.push(current.data);

  return result;
}


