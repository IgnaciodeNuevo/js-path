const entryPoint = document.getElementById('start');
let myElementCount = 0;

(function startExercise() {
  entryPoint.innerHTML += `
    <input id='target' type='text' placeholder='Add Item'>
    <button onclick='addItem()'>Add Item</button>
    <button onclick='clearStorage()'>Clear Storage</button>
    <fieldset>
      <legend>Todo List:</legend>
      <div id="todo-list"></div>
    </fieldset>`;

  return entryPoint;
})();

function addItem() {
  const todoList = document.getElementById('todo-list');
  const myValue = document.getElementById('target').value;

  if (myValue !== '') {
    const id = myElementCount++;
    var myDb = [];

    myDb.push({
      checked: false,
      value: myValue,
    });
  }

  console.log(myDb);

  (function clearInut() {
    if (target.value != '') {
      target.value = '';
    }
  })();

  // let jsonString = JSON.stringify(myDb);

  // console.log(jsonString);

  // myDb += `
  //           <label>
  //           <input type="checkbox">
  //             ${value}
  //           </label>`;
}
