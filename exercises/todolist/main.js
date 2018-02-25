const entryPoint = document.getElementById('start');

function startExercise() {
  // Had problems iterating through getElementByClassName NodeList
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

let myInputCount = 1;

function addItem() {
  const todoList = document.getElementById('todo-list');
  const value = document.getElementById('target').value;

  if (value !== '') {
    const elementId = 'element-' + myInputCount++;
    todoList.innerHTML += `
            <label for="${elementId}">
            <input type="checkbox" id="${elementId}">
            ${value}
            </label>`;
  }

  (function clearInut() {
    if (target.value != '') {
      target.value = '';
    }
  })();
}

startExercise();
