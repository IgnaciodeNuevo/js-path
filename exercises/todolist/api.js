//Module pattern or revealed module pattern
const Api = (function() {
    let todos = [];
    const add = function(item) {
        item.id = guid();
        todos.push(item);

        // Save items to localStorage
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

        // Save items to localStorage
        return Promise.resolve(todos);
    };

    const clear = function() {
        todos = [];

        // Save todos (empty) to localStorage
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
