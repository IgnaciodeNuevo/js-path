const entryPoint = document.getElementById('start');

function startExercise() {
  // Had problems iterating through getElementByClassName NodeList
  entryPoint.innerHTML +=
    "<input id='target' type='text' placeholder='Add Item'> <button onclick='getData()'>Add Item</button> ";

  return entryPoint;
}

function getData() {
  let value = document.getElementById('target').value;

  if (value !== '') {
    entryPoint.innerHTML += `<p>${value}</p>`;
    console.log(value);
  }
}

startExercise();
