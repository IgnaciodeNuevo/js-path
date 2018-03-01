const todoList = document.getElementById('todo-list');
const api = Api;

function drawTodos(todos) {
  getTodos().then(todos => {
    todoList.innerHTML += `
      <label>
        <input type="checkbox" data-guid=${id}>
        ${value}
      </label>`;
  });
}

function clearInut() {
  document.getElementById('target').value = '';
}

function updateTodo() {
  const todo = document.querySelector('input[type=checkbox]').checked;
  api.addTodo({ checked: todo, value: value }).then(todos => {
    drawTodos(todos);
    clearInput();
  });
}

function addItem() {
  const value = document.getElementById('target').value;
  if (value === '') {
    return;
  }

  api
    .addTodo({
      checked: false,
      value: value,
    })
    .then(todos => {
      drawTodos(todos);
      clearInput();
    });
}

function toogleTodo() {
  const id = document.querySelector('input[type=checkbox]').getAttribute('data-guid');
  api.getTodoById(id).then(todo => {
    todo.checked = !todo.checked;
    api.updateTodo(todo).then(() => {
      draw();
    });
  });
}

function clearStorage() {
  api.clearTodos().then(() => {
    drawTodos();
  });
}
