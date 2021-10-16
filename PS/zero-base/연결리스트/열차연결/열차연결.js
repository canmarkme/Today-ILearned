
let input = [
  [4, 7, 1, 10, 6],
  [3, 10, 6, 9, 11, 3, 4],
  [5, 8, 7, 3, 4, 1, 2, 7, 10, 7]
];

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} → `);
  }
  console.log("null");
};

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  answer(input[i]).printNode();
}

function Train(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.haed = null;
}

function answer(nums) {
  let ll = new LinkedList();
  let current, prev;      // 객체 저장 변수

  for (let i = 0; i < nums.length; i++) {
    current = new Train(nums[i]);

    // 1. Train 객체를 nums 수 만큼 만들고 next를 이용해서 열차 연결
    // ① 맨 앞 Train 객체는 this.head로 연결합니다.
    if (i === 0) {
      ll.head = current;

      // ② 이전 Train 객체.next = 현재 Train 객체
    } else {
      prev.next = current;
    }

    prev = current;   // ① 또는 ② 후에 Train 객체를 prev로 초기화하는 작업
  }

  return ll;
}


