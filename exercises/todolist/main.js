const todoList = document.getElementById('todo-list');
const api = Api;

function drawTodos(todos) {}

function clearInut() {}

function addItem() {
  const value = document.getElementById('target').value;
  if (value === '') {
    return;
  }

  api.addTodo({ checked: false, value: value }).then(todos => {
    drawTodos(todos);
    clearInput();
  });
}

// check or uncheck
function toogleTodo() {
  //TODO: OBTENER id
  var id = null;
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
