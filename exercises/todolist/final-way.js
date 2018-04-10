const todoList = document.getElementById('todo-list');
const clearButton = document.querySelector('.js-clear-storage');
const form = document.querySelector('form');

const api = new Api();

const components = [
    //funciones constructoras
    new AddToDoListCompenent(api),
    new ToDoListCompenent(api),
    new ClearCompenent(api)
];

components.forEach(function (component) {
    component.init();
})

// Función constructora
var API = function () {
    // Al asignar that al this dentro de la Función
    // tenemos acceso, en este caso a los métodos que exponemos
    var that = this;
    var todos = [];

    that.add = function (item) {
        todos.push(item);
    };
}

var myTodos1 = new API();
myTodos1.add('ignacio');

var myTodos2 = new API();
myTodos2.add('alfredo');
