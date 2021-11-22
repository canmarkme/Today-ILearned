const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

const getMaxId = todos => {
  if (todos.length === 0) return 0;
  return todos.reduce((prev, curr) => (curr.id > prev ? curr.id : prev), 0);
};
console.log(getMaxId(todos)); // 3
console.log(getMaxId([])); // 0
