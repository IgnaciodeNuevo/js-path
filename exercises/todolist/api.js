//Module pattern or revealed module pattern

var Api = (function() {
  var todos = [];

  var add = function(todo) {
    todo.id = guid();
    todos.push(todo);
    return Promise.resolve(todos);
  };

  var get = function() {
    return Promise.resolve(todos);
  };

  var clear = function() {
    todos = [];
    return Promise.resolve();
  };

  return {
    addTodo: add,
    getTodos: get,
    clearTodos: clear,
  };
})();
