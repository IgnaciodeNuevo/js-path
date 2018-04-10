//Module pattern or revealed module pattern
const Api = (function() {
    let todos = JSON.parse(localStorage.getItem('todoListDataBase')) || [];

    const add = function(item) {
        item.id = guid();
        todos.push(item);

        localStorage.setItem('todoListDataBase', JSON.stringify(todos));
        return Promise.resolve(todos);
    };

    const get = function() {
        return Promise.resolve(todos);
    };

    const getById = function(id) {
        let item;
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == id) {
                item = todos[i];
            }
        }
        return Promise.resolve(item);
    };

    const update = function(item) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == item.id) {
                todos[i] = item;
            }
        }

        localStorage.setItem('todoListDataBase', JSON.stringify(todos));
        return Promise.resolve(todos);
    };

    const clear = function() {
        todos = [];

        localStorage.setItem('todoListDataBase', JSON.stringify(todos));
        return Promise.resolve();
    };

    return {
        addTodo: add,
        getTodos: get,
        clearTodos: clear,
        getTodoById: getById,
        updateTodo: update,
    };
})();
