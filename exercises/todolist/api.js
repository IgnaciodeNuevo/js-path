//Module pattern or revealed module pattern
let Api = (function() {
  let todos = [];
  let add = function(item) {
    item.id = guid();
    todos.push(item);

    // Save items to localStorage
    return Promise.resolve(todos);
  };

  let get = function() {
    return Promise.resolve(todos);
    };

  let getById = function (id) {
    var item;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        item = todos[i];
      }
    }
    return Promise.resolve(item);
  }

  let update = function (item) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == item.id) {
        todos[i] = item;
      }
    }

    // Save items to localStorage
    return Promise.resolve(todos);
  }

  let clear = function() {
    todos = [];
    // Save todos (empty) to localStorage
    return Promise.resolve();
    };

  return {
    addTodo: add,
    getTodos: get,
    clearTodos: clear,
    getTodoById: getById,
    updateTodo: update
  };
})();
