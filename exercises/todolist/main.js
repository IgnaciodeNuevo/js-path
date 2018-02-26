const entryPoint = document.getElementById('start');
let myElementCount = 0;

function startExercise() {
  entryPoint.innerHTML += `
    <input id='target' type='text' placeholder='Add Item'>
    <button onclick='addItem()'>Add Item</button>
    <button onclick='clearStorage()'>Clear Storage</button>
    <fieldset>
      <legend>Todo List:</legend>
      <div id="todo-list"></div>
    </fieldset>`;

  return entryPoint;
}

function addItem() {
  const todoList = document.getElementById('todo-list');
  const value = document.getElementById('target').value;

  if (value !== '') {
    const elementId = 'element-' + myElementCount++;
    var myDb = new Object();
    myDb += `
            <label for="${elementId}">
            <input type="checkbox" id="${elementId}">
            ${value}
            </label>`;
  }

  let jsonString = JSON.stringify(myDb);

  console.log(jsonString);

  (function clearInut() {
    if (target.value != '') {
      target.value = '';
    }
  })();
}

startExercise();
