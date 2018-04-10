const todoList = document.getElementById('todo-list');
const clearButton = document.querySelector('.js-clear-storage');
const form = document.querySelector('form');

const storedTodos = JSON.parse(localStorage.getItem('todoListDataBase'));
const api = Api;

drawTodos(storedTodos);

function drawTodos(todos) {
    if (!todos) {
        api.getTodos().then(todos => {
            iterateTodos(todos);
        });
    } else {
        iterateTodos(todos);
        // storedTodos.forEach(storedTodo => api.addTodo(storedTodo));
        // api.getTodos().then(todos => {
        //     iterateTodos(todos);
        // });
    }
}

function iterateTodos(todos) {
    todoList.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        todoList.innerHTML += `
        <label>
            <input type="checkbox" data-guid=${todos[i].id}>
            ${todos[i].value}
        </label>`;
        document
            .querySelector(`[data-guid="${todos[i].id}"]`)
            .addEventListener('change', function() {
                toggleTodo(todos[i].id);
            });
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

function toggleTodo(id) {
    api.getTodoById(id).then(item => {
        item.checked = !item.checked;
        api.updateTodo(item).then(() => {
            drawTodos();
        });
    });
}

function clearStorage() {
    api.clearTodos().then(() => {
        drawTodos();
    });
}

clearButton.addEventListener('click', function() {
    localStorage.clear();
});

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
