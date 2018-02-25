const entryPoint = document.getElementById('start');

function startExercise() {
  // Had problems iterating through getElementByClassName NodeList
  entryPoint.innerHTML += `
    <input id='target' type='text' placeholder='Add Item'>
    <button onclick='addItem()'>Add Item</button>
    <button onclick='showStorage()'>Show Storage</button>
    <button onclick='clearStorage()'>Clear Storage</button>
    <fieldset id="myItems">
      <legend>Todo List:</legend>
    </fieldset>`;

  return entryPoint;
}

function addItem() {
  const myItems = document.getElementById('myItems');
  let value = document.getElementById('target').value;
  let hash = Math.round(Math.random() * 1000000000000000000000);

  (function trimText() {
    return (trimedText = value.replace(/ /g, '') + hash);
  })();

  if (value !== '') {
    myItems.innerHTML += `
    <label for="${trimedText}">
      <input type="checkbox" id="${trimedText}">
      ${value}
    </label>`;
  }

  (function clearInut() {
    if (target.value != '') {
      target.value = '';
    }
  })();
}

function clearStorage() {
  localStorage.clear();
  console.log('Cleared Storage');
}

function showStorage() {
  entryPoint.outerHTML += "<div id='localStorage'></div>";
  // if (typeof Storage !== 'undefined') {
  //   // Store
  //   localStorage.setItem('lastname', 'Smith');
  //   // Retrieve
  //   document.getElementById('localStorage').innerHTML = localStorage.getItem('lastname');
  // } else {
  //   document.getElementById('localStorage').innerHTML =
  //     'Sorry, your browser does not support Web Storage...';
  // }
}

startExercise();
