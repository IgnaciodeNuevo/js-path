const todoList = document.getElementById('todo-list');
const form = document.querySelector('form');
const btn = document.getElementById('js-add-item');
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
  // Then call toogleTodo
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  console.log('Prevented!');
});


btn.addEventListener('click', function() {
  const value = document.getElementById('target').value;
  if (value === '') {
    return;
  }

  api.addTodo({ checked: false, value: value }).then(todos => {
      drawTodos(todos);
      clearInput();
    });
});
