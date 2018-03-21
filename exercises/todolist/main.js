const todoList = document.getElementById('todo-list');
const form = document.querySelector('form');

// Recuperar todos guardados
const storedTodos = JSON.parse(localStorage.getItem('todoListDataBase'));
// const api = Api(storedTodos);
const api = Api;

drawTodos(storedTodos);

function drawTodos(todos) {
    if (!todos) {
        api.getTodos().then(todos => {
            todoList.innerHTML = '';
            for (let i = 0; i < todos.length; i++) {
                todoList.innerHTML += `
        <label>
          <input type="checkbox" data-guid=${todos[i].id}>
          ${todos[i].value}
          </label>`;
                // SELECCIONAR JUSTO EL CHECKBOX QUE TENGA GUID TODOS[I].ID (WITH)
                document.querySelector('input[type=checkbox]').addEventListener('change', function() {
                    toggleTodo(todos[i].id);
                });
            }
        });
    } else {
        todoList.innerHTML = '';
        for (let i = 0; i < todos.length; i++) {
            todoList.innerHTML += `
        <label>
          <input type="checkbox" data-guid=${todos[i].id}>
          ${todos[i].value}
        </label>`;
            // SELECCIONAR JUSTO EL CHECKBOX QUE TENGA GUID TODOS[I].ID (WITH)
            document.querySelector('input[type=checkbox]').addEventListener('change', function() {
                toggleTodo(todos[i].id);
            });
        }
    }
}

function clearInput() {
    document.getElementById('target').value = '';
}

function updateTodo(item) {
    api.updateTodo(item).then(todos => {
        localStorage.setItem('todoListDataBase', JSON.stringify(todos));
        drawTodos(todos);
        clearInput();
    });
}

function toogleTodo(id) {
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
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = document.getElementById('target').value;
    if (value === '') {
        return;
    }

    api.addTodo({ checked: false, value: value }).then(todos => {
        localStorage.setItem('todoListDataBase', JSON.stringify(todos));
        drawTodos(todos);
        clearInput();
    });
});
