const todoList = document.getElementById('todo-list');
const clearButton = document.querySelector('.js-clear-storage');
const form = document.querySelector('form');

const api = Api;

init();

function init() {
    api.getTodos().then(function(todos) {
        drawTodos(todos);
    });
}

function drawTodos(todos) {
    let content = '';
    for (let i = 0; i < todos.length; i++) {
        content += `
        <label>
            <input type="checkbox" ${todos[i].checked ? 'checked' : ''} data-guid=${todos[i].id}>
            ${todos[i].value}
        </label>`;
    }

    todoList.innerHTML = content;

    for (let i = 0; i < todos.length; i++) {
        document
            .querySelector(`[data-guid="${todos[i].id}"]`)
            .addEventListener('change', function () {
                console.log('oatata');
                toggleTodo(todos[i].id);
            });
    }
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

function toggleTodo(id) {
    api.getTodoById(id).then(item => {
        item.checked = !item.checked;
        api.updateTodo(item).then(todos => {
            drawTodos(todos);
        });
    });
}

clearButton.addEventListener('click', function() {
    api.clearTodos();
    init();
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = document.getElementById('target').value;
    if (value === '') {
        return;
    }

    api.addTodo({ checked: false, value: value }).then(todos => {
        drawTodos(todos);
        clearInput();
    });
});
