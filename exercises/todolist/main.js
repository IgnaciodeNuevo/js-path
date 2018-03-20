const todoList = document.getElementById('todo-list');
const form = document.querySelector('form');

// Recuperar todos guardados
const storedTodos = localStorage.getItem('dataBase'); // New
// const api = Api(storedTodos);
const api = Api;

function drawTodos(todos) {
  api.getTodos().then(todos => {
    todoList.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
      todoList.innerHTML += `
        <label>
          <input type="checkbox" data-guid=${todos[i].id}>
          ${todos[i].value}
        </label>`;
    }
  });
}

function clearInput() {
  document.getElementById('target').value = '';
}

function updateTodo(item) {
  api.updateTodo(item).then(todos => {
    drawTodos(todos);
    clearInput();
  });
}

function toogleTodo() {
  const id = document.querySelector('input[type=checkbox]').getAttribute('data-guid');
  api.getTodoById(id).then(item => {
    item.checked = !item.checked;
    api.updateTodo(item).then(() => {
      draw();
    });
  });
}

function clearStorage() {
  api.clearTodos().then(() => {
    drawTodos();
  });

  // Add event listener when clicking checkbox with this....
  document.querySelector('input[type=checkbox]').addEventListener('change', changeHandler); // News
  function changeHandler() { // News
    if (this.checked) { // News
      console.log(this); // News
    } // News
  } // News

  // Then call toogleTodo // News
  // toogleTodo(); // News
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const value = document.getElementById('target').value;
  if (value === '') {
    return;
  }

  // localStorage.setItem('dataBase', JSON.stringify(todos)); // New

  api.addTodo({ checked: false, value: value }).then(todos => {
    drawTodos(todos);
    clearInput();
  });
});
