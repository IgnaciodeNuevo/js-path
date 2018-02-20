const entryPoint = document.getElementById('start');

function startExercise() {
  // Had problems iterating through getElementByClassName NodeList
  entryPoint.innerHTML +=
    "<input id='target' type='text' placeholder='Add Item'><button onclick='getData()'>Add Item</button><button onclick='showStorage()'>Show Storage</button><button onclick='clearStorage()'>Clear Storage</button>";

  return entryPoint;
}

function getData() {
  let value = document.getElementById('target').value;

  if (value !== '') {
    entryPoint.innerHTML += `<p>${value}</p>`;
    console.log(value);
  }
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
