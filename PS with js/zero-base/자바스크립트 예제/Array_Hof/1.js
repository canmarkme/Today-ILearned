const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

const render = todos => {
  todos.forEach(value => {
    console.log(`<li id="${value.id}">\n\t<label><input type="checkbox">${value.content}</label>\n</li>`);
  });
};

console.log(render(todos));
